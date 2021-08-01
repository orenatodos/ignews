import { useCallback } from 'react'
import { signIn, useSession } from 'next-auth/client'

import * as S from './styles'
import api from 'services/api'
import getStripeJs from 'services/stripe-js'

const SubscribeButton = () => {
  const [session] = useSession()

  const handleSubscribe = useCallback(async () => {
    if (!session) {
      signIn('github')
      return
    }

    try {
      const response = await api.post('subscribe')

      const { sessionId } = response.data

      const stripe = await getStripeJs()

      await stripe?.redirectToCheckout({ sessionId })
    } catch (err) {
      alert(err.message)
    }
  }, [session])

  return (
    <S.Wrapper type="button" onClick={handleSubscribe}>
      Subscribe now
    </S.Wrapper>
  )
}

export default SubscribeButton
