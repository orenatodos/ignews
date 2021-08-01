import Prismic from '@prismicio/client'

const getPrismicClient = (req?: unknown) => {
  const client = Prismic.client(
    process.env.PRISMIC_URL as string,
    {
      req,
      accessToken: process.env.PRISMIC_ACCESS_TOKEN as string
    }
  )

  return client
}

export default getPrismicClient
