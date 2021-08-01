import { GetServerSideProps } from 'next'

import { RichText } from 'prismic-dom'
import getPrismicClient from 'services/prismic'

import PostTemplate, { PostProps } from 'templates/Posts/Post'

export default function Post (props: PostProps) {
  return (
    <PostTemplate {...props}/>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { slug } = params

  const prismicClient = getPrismicClient(req)

  const response = await prismicClient.getByUID('post', String(slug), {})

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(`${response.last_publication_date}`).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  return {
    props: {
      post
    }
  }
}
