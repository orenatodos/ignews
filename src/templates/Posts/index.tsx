import Link from 'next/link'

import * as S from './styles'

type Post = {
  slug: string
  title: string
  excerpt: string
  updatedAt: string
}

export type PostsProps = {
  posts: Post[]
}

const PostsTemplate = ({ posts }: PostsProps) => (
  <S.Wrapper>
    <S.Posts>
      {posts.map(post => (
        <Link href={`/posts/${post.slug}`} key={post.slug}>
          <S.Post>
            <S.Time>{post.updatedAt}</S.Time>
            <S.Title>{post.title}</S.Title>
            <S.Description>{post.excerpt}</S.Description>
          </S.Post>
        </Link>
      ))}
    </S.Posts>
  </S.Wrapper>
)

export default PostsTemplate
