import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import * as S from './styles'

const SignInButton = () => {
  const isLogged = true

  return (
    <S.Wrapper type="button" isLogged={isLogged}>
      <FaGithub size={20} />
      { isLogged ? 'Renato Silva' : 'Sign in with GitHub' }
      { isLogged && <FiX color="#737380" /> }
    </S.Wrapper>
  )
}

export default SignInButton
