import type { AppProps } from 'next/app'

import AppProvider from 'contexts'

import Header from 'components/Header'

import GlobalStyles from 'styles/global'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <AppProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyles />
    </AppProvider>
  )
}

export default MyApp
