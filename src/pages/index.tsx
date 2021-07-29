import { GetStaticProps } from 'next'

import stripe from 'services/stripe'

import Home, { HomeProps } from 'templates/Home'

export default function Index (props: HomeProps) {
  return (
    <Home {...props} />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve(
    'price_1Ibb2bH8LYYb5AGbM281rbml',
    {
      expand: ['product'] // Exibe informações do produto
    }
  )

  const product = {
    priceId: price.id,
    amount: price.unit_amount / 100
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24
  }
}
