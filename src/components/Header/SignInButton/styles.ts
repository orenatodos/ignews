import styled, { css } from 'styled-components'

type ButtonStylesProps = {
  isLogged: boolean
}

export const Wrapper = styled.button<ButtonStylesProps>`
  ${({ isLogged }) => css`
    height: 4.8rem;
    background: var(--gray-700);
    border-radius: 9999px;
    padding: 0 2.4rem;
    gap: 1.6rem;
    color: var(--white);
    font-weight: 700;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8)
    }

    > svg:first-child {
      color: #eba417;

      ${isLogged && css`
        color: #04d361;
      `}
    }
  `}
`
