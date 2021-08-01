import * as S from './styles'

export type PostProps = {
  post: {
    slug: string
    title: string
    content: string
    updatedAt: string
  }
}

const PostTemplate = ({ post }: PostProps) => (
  <S.Wrapper>
    <S.Post>
      <S.Title>{post.title}</S.Title>
      <S.Time>{post.updatedAt}</S.Time>
      <S.Content dangerouslySetInnerHTML={{ __html: post.content }} />
    </S.Post>
  </S.Wrapper>
)

export default PostTemplate
