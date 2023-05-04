import React, { PropsWithChildren } from 'react'
//import { Container } from 'semantic-ui-react'

import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import styles from './layout.module.css';

type LayoutProps = {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <>

  <div className={styles.container}>
    <Navbar />
   
      
	</div>

  <div className="container">

  {children}

  </div>

  <div className="containerFooter">  
    <Footer />
    </div>



<style jsx>{`
  .container {
    background-color: salmon;
  }


  `}
</style>

  </>
)

export default Layout  