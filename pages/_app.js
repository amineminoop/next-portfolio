import Navbar from '@components/Navbar'
import '@styles/globals.css'

function Application({ Component, pageProps }) {
  return (<>
  <Navbar/>
  <Component {...pageProps} />
  </>)
}

export default Application
