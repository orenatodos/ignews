import SubscribeButton from 'components/SubscribeButton'

import * as S from './styles'

const Home = () => (
  <S.Wrapper>
    <S.TextBlock>
      <S.Welcome>
        <img
          src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
          alt="Waving hand"
        />
         Hey, welcome
      </S.Welcome>
      <S.Title>
        News about the <span>React</span> world
      </S.Title>
      <S.Description>
        Get access to all the publications <span>for $9.90 mounth</span>
      </S.Description>
      <SubscribeButton />
    </S.TextBlock>
    <img src="/images/avatar.svg" alt="Girl coding" />
  </S.Wrapper>
)

export default Home
