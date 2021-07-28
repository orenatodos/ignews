import styled from 'styled-components'

export const Wrapper = styled.button`
  width: 260px;
  height: 6.4rem;
  background: var(--yellow-500);
  border-radius: 9999px;
  font-size: 2rem;
  font-weight: 700;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`
