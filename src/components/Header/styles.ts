import styled, { css } from 'styled-components'

import * as SignInButton from './SignInButton/styles'

type MenuLinkProps = {
  active?: boolean
}

export const Wrapper = styled.header`
  --height: 7.2rem;

  height: var(--height);
  border-bottom: 1px solid var(--gray-700);

  ${SignInButton.Wrapper}{
    margin-left: auto;
  }
`

export const Container = styled.div`
  max-width: 1120px;
  height: inherit;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
`

export const Menu = styled.nav`
  margin-left: 7.2rem;
  display: flex;
  align-items: center;
  gap: 2.4rem;
`

export const MenuLink = styled.a<MenuLinkProps>`
  ${({ active }) => css`
    line-height: var(--height);
    position: relative;
    padding: 0 0.8rem;
    color: var(--gray-300);
    transition: color 0.2s;

    &:hover {
      color: var(--white);
    }

    ${active && css`
      color: var(--white);
      font-weight: 700;

      &::after {
        content: '';
        width: 100%;
        height: 3px;
        background: var(--yellow-500);
        border-radius: 3px 3px 0 0;
        position: absolute;
        left: 0;
        bottom: 1px;
      }
    `}
  `}
`
