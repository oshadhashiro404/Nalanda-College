import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
