import '../styles/globals.css'
import { store  } from '../redux'
import "bootstrap/dist/css/bootstrap.min.css"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default store.withRedux(MyApp)
