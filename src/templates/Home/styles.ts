import styled from 'styled-components'

import * as SubscribeButton from 'components/SubscribeButton/styles'

export const Wrapper = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  height: calc(100vh - 7.2rem);
  display: flex;
  align-items: center;
  gap: 16rem;
`

export const TextBlock = styled.div`
  max-width: 510px;

  ${SubscribeButton.Wrapper}{
    margin-top: 4rem;
  }
`

export const Welcome = styled.span`
  font-size: 2.4rem;
  font-weight: 700;
  display: block;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  > img {
    width: 40px;
  }
`

export const Title = styled.h1`
  font-size: 7.2rem;
  font-weight: 900;
  line-height: 1;
  margin-top: 4rem;

  > span {
    color: var(--cyan-500);
  }
`

export const Description = styled.p`
  font-size: 2.4rem;
  line-height: 3.6rem;
  margin-top: 2.4rem;

  > span {
    display: block;
    font-weight: 700;
    color: var(--cyan-500);
  }
`
