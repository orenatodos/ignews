import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/client'

import * as S from './styles'

const SignInButton = () => {
  const [session] = useSession()

  return (
    <S.Wrapper
      type="button"
      isLogged={!!session}
      onClick={() => session ? signOut() : signIn('github')}
    >
      <FaGithub size={20} />
      { session ? session.user?.name : 'Sign in with GitHub' }
      { session && <FiX color="#737380" /> }
    </S.Wrapper>
  )
}

export default SignInButton
