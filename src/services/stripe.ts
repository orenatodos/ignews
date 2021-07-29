import Stripe from 'stripe'
import { version } from '../../package.json'

const stripe = new Stripe(
  process.env.STRIPE_API_KEY as string,
  {
    apiVersion: '2020-08-27',
    appInfo: {
      name: 'ig.news',
      version
    }
  }
)

export default stripe
