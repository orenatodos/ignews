import { GetStaticProps } from 'next'
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'

import getPrismicClient from 'services/prismic'

import PostsTemplate, { PostsProps } from 'templates/Posts'

export default function Posts (props: PostsProps) {
  return (
    <PostsTemplate {...props }/>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismicClient = getPrismicClient()

  const response = await prismicClient.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['post.title', 'post.content']
  })

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find((content: any) => content.type === 'paragraph')?.text ?? '',
      updatedAt: new Date(`${post.last_publication_date}`).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })

  return {
    props: {
      posts
    }
  }
}
