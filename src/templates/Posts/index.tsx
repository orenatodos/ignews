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
        <S.Post key={post.slug}>
          <S.Time>{post.updatedAt}</S.Time>
          <S.Title>{post.title}</S.Title>
          <S.Description>{post.excerpt}</S.Description>
        </S.Post>
      ))}
    </S.Posts>
  </S.Wrapper>
)

export default PostsTemplate
