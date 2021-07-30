import { PropsWithChildren } from 'react'
import { Session } from 'next-auth'
import { Provider as NextAuthProvider } from 'next-auth/client'

type AppProviderProps = {
  session: Session
}

const AppProvider = ({ children, session }: PropsWithChildren<AppProviderProps>) => (
  <NextAuthProvider session={session}>
    {children}
  </NextAuthProvider>
)

export default AppProvider
