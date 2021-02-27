import { GlobalStyle } from '../styles/globals'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyle/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
