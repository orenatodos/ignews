import styled from 'styled-components'

export const Wrapper = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
`

export const Post = styled.article`
  max-width: 720px;
  margin: 6.4rem auto 0;
`

export const Title = styled.h1`
  font-size: 5.4rem;
  font-weight: 900;
  line-height: 6rem;
`

export const Time = styled.time`
  font-size: 1.6rem;
  color: var(--gray-300);
  margin-top: 2.4rem;
  display: block;
`

export const Content = styled.div`
  margin-top: 3.2rem;
  font-size: 1.8rem;
  line-height: 3rem;
  color: var(--gray-100);

  p,
  ul {
    margin: 3.2rem 0;
  }

  ul {
    padding-left: 2.4rem;

    > li {
      margin: 1.6rem 0;
    }
  }
`
