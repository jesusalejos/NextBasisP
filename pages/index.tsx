//import {useState, useEffect} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import fetch from 'isomorphic-unfetch';
import { Header, Card } from 'semantic-ui-react';

export const getServerSideProps = async ()=> {
const response = await fetch('https://platzi-avo.vercel.app/api/avo');
const {data: productList}:TAPIAvoResponse = await response.json();
	
	
	return {
		props: {
			productList,
		}
	}

}

const Home = ({productList}: {productList:TProduct[]})=> {



	return ( 

	<>

		<Head>
        <title>HomePageF</title>
        <script src="https://connect.facebook.net/en_US/sdk.js" />
      </Head>

		<Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

		<Header as="h1" textAlign='center'>My First App with next.js</Header>

	
	<Card.Group itemsPerRow={4} stackable>

		{productList.map((product) => 
			<>

			<Link key={product.id} href={`/product/${product.id}`} passHref>
					
			<Card
			
			as="a"
			header={product.name}
			image={<Image src={product.image} width={333} height={333} /> }
    		meta={<Card.Meta style={{ color: 'dimgray' }}>{product.price}</Card.Meta>}
				/>
			</Link>

			</>

			)}
		
 </Card.Group>
	

	

	<style jsx>{`
  
  h1 {

  	padding: 12px;
  }


  `}
</style>

  </>
)

		
	
}

export default Home