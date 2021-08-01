import styled from 'styled-components'

export const Wrapper = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
`

export const Posts = styled.div`
  max-width: 720px;
  margin: 6.4rem auto 0;
`

export const Title = styled.strong`
  display: block;
  font-size: 2.4rem;
  line-height: 3.4rem;
  font-weight: 700;
  margin-top: 1.6rem;
  color: var(--white);
  transition: color 0.2s;
`

export const Post = styled.a`
  display: block;
  padding-bottom: 3.2rem;
  border-bottom: 1px solid var(--gray-600);

  &:not(:first-child){
    margin-top: 3.2rem;
  }

  &:hover ${Title}{
    color: var(--yellow-500);
  }
`

export const Time = styled.time`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  color: var(--gray-300);
`

export const Description = styled.p`
  line-height: 2.6rem;
  color: var(--gray-300);
  margin-top: 0.4rem;
`
