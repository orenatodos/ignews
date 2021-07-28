import SignInButton from './SignInButton'

import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <S.Container>
      <img src="/images/logo.svg" alt="ig.news" />
      <S.Menu>
        <S.MenuLink href="/" active>
          Home
        </S.MenuLink>
        <S.MenuLink href="/posts">
          Posts
        </S.MenuLink>
      </S.Menu>
      <SignInButton />
    </S.Container>
  </S.Wrapper>
)

export default Header
