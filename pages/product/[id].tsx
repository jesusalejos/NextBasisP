import {useState, useEffect} from 'react'
import Image from 'next/image';
import {useRouter} from 'next/router'
import fetch from 'isomorphic-unfetch'
import { GetStaticPaths, GetStaticProps } from 'next' //it's important for to use the context



export const getStaticProps: GetStaticProps = async ({params})=> {

	// params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1

const response = await fetch(`https://platzi-avo.vercel.app/api/avo/${params?.id}`)
const product:TProduct = await response.json();

	
	
	return {
		props: {
			product,
		},
		revalidate: 10, //in ISR
	}

}

export const getStaticPaths: GetStaticPaths = async () => {
	
  const response = await fetch('https://platzi-avo.vercel.app/api/avo')
  const { data }: TAPIAvoResponse = await response.json()

  const paths = data.map(({ id }) => ({ params: { id } }))

  return {
    // Statically generate all paths
    paths,
    // Display 404 for everything else
    //fallback: false, //in SSG
    fallback: 'blocking', //in ISR. it's possible true? investiging...

  }
}



const ProductItem = ({product}: {product:TProduct}) => {
	
	//const {
	//	query: {id},
	//	} = useRouter() //doble des-estructuración

	//const [product, setProduct] = useState<TProduct | null>(null);



//useEffect(()=> {
//	if (id) {
	
//	const fetching = window.fetch(`/api/avo/${id}`) //attention with the string literal use, it's necessary. 
	

//	const response = fetching.then (res => res.json())

//	const result = response.then ((data: TProduct) => {

//	setProduct(data)


//	})

//	}



//}, [id])

	

	return (
	<>
		{product === null ? null : (
		<>

		<div className="item">
		<h1>{product.name}</h1>
		<Image src={product.image} height={250} width={250} alt="DescriptionParticulary" />
		<h2>{product.price}</h2>
		</div>
		</>
)}

<style jsx>{`

	.item {
		display: flex;
		flex-direction: column; 
		align-items: center; 

	}

	`}
	</style>

	</>
		
		)
	};

export default ProductItem
