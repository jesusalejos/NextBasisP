import { AppProps } from 'next/app'
import 'semantic-ui-css/semantic.min.css'
import '../global.css'
import  Layout from '@components/Layaout/Layout'


//import CartProvider from '@store/Cart'

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Providers--context 
  //Aditional props
  // Aditional layout fot all the pages
  // Manejar errores - componentDidCatch
  return (
    //<CartProvider>
    <Layout>
      <Component {...pageProps} />
     </Layout>
    //</CartProvider>
  )
}

export default MyApp