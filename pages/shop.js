import { urlFor, client } from '../lib/client';
import Link from 'next/link';
import shopImg from '../public/banner/b1.jpg';
import { motion } from 'framer-motion';
import { slideIn, navVariants, textVariant } from '../utils/motion';


const Shop = ({ products }) => {
 
  return (
    <section className='overflow-x-hidden'>
        <motion.div variants={navVariants}
        initial="hidden" whileInView="show" className='page-header' style={{ backgroundImage: `url(${shopImg.src})` }}> 
          <p className='shop-pa'>save more with coupons & up to 70% off</p>
        </motion.div>
        <motion.h1 variants={textVariant(1.1)} className='text-center text-[3em] mt-[25px]'>Our Products</motion.h1>

        <motion.div variants={slideIn('left', 'tween', 0.9, .6)}
      initial="hidden" whileInView="show" className='shop-product overflow-y-hidden'>
        {products?.map((product) =>  (  
          <div key={product.id} className='product-container2 mb-10'>
          <Link href={`/shopproduct/${product.slug.current}`}>
          <div className='product-card'>
          <img key={product.id} src={urlFor(product?.image[0]).url()} alt="product-card" width={250} height={250} />
          <p>{product.name}</p>
          <p>${product.price}</p>
          </div>
          </Link>
          
        </div>
      ))}
        </motion.div>
       

    </section>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "shopProduct"]';
  const products = await client.fetch(query);

  return {
    props: {products}
  }
}



export default Shop
