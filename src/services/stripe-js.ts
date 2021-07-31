import { loadStripe } from '@stripe/stripe-js'

const getStripeJs = async () => {
  const stripeJs = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY as string)

  return stripeJs
}

export default getStripeJs
