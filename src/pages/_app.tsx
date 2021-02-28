import { ChallengesProvider } from '../providers/ChallengesContext'
import { CountdownProvider } from '../providers/CountdownContext'

import { GlobalStyle } from '../styles/globals'

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <CountdownProvider>
        <GlobalStyle/>
        <Component {...pageProps} />
      </CountdownProvider>
    </ChallengesProvider>
  )
}

export default MyApp
