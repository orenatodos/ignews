import { NextApiRequest, NextApiResponse } from 'next'
import { Readable } from 'stream' // Ler aos poucos
import Stripe from 'stripe'

import stripe from 'services/stripe'
import { saveSubscription } from './_lib/manageSubscription'

// Converte Readable Stream em string, objeto
async function buffer (readable: Readable) {
  const chucks = []

  for await (const chuck of readable) {
    chucks.push(
      typeof chuck === 'string' ? Buffer.from(chuck) : chuck
    )
  }

  return Buffer.concat(chucks)
}

export const config = {
  api: {
    bodyParser: false
  }
}

const relevantEvents = new Set([
  'checkout.session.completed',
  'customer.subscription.updated',
  'customer.subscription.deleted'
])

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    const buf = await buffer(request)
    const secret = request.headers['stripe-signature']

    let stripeEvent: Stripe.Event

    try {
      stripeEvent = stripe.webhooks.constructEvent(
        buf,
        secret as string | string[],
        process.env.STRIPE_WEBHOOK_SECRET as string
      )
    } catch (error) {
      return response.status(400).send(`Webhook error: ${error.message}`)
    }

    const { type } = stripeEvent

    if (relevantEvents.has(type)) {
      try {
        const checkoutSession = stripeEvent.data.object as Stripe.Checkout.Session
        const subscription = stripeEvent.data.object as Stripe.Subscription

        switch (type) {
          case 'customer.subscription.updated':
          case 'customer.subscription.deleted':
            return saveSubscription(
              subscription.id,
              subscription.customer.toString() as string
            )
          case 'checkout.session.completed':
            return saveSubscription(
              checkoutSession.subscription?.toString() as string,
              checkoutSession.customer?.toString() as string,
              true
            )
          default:
            throw new Error('Unhandled event.')
        }
      } catch {
        return response.json({ error: 'Webhook handle failed.' })
      }
    }

    response.json({ received: true })
  } else {
    response.setHeader('Allow', 'POST')
    response.status(405).end('Method not allowed')
  }
}
