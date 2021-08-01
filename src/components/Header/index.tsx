import ActiveLink from './ActiveLink'

import SignInButton from './SignInButton'

import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <S.Container>
      <img src="/images/logo.svg" alt="ig.news" />
      <S.Menu>
        <ActiveLink href="/">
          <S.MenuLink>
            Home
          </S.MenuLink>
        </ActiveLink>
        <ActiveLink href="/posts">
          <S.MenuLink>
            Posts
          </S.MenuLink>
        </ActiveLink>
      </S.Menu>
      <SignInButton />
    </S.Container>
  </S.Wrapper>
)

export default Header
