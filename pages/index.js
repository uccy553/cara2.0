import Head from 'next/head'
import { Feature, Hero, Products, NewArrivals, FooterBanner, Newsletter, Footer } from '../components';
import { client } from '../lib/client';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';
import Link from 'next/link';
import Image from 'next/image';
import banner from '../public/banner/b2.jpg';

export default function Home({ products, newArrivalsData }) {

  return (
    <section className='overflow-x-hidden'>

      <div>
        <Hero />
      </div>

      <div>
        <Feature />
      </div>


      <motion.div variants={slideIn('left', 'tween', 0.9, 1)}
      initial="hidden" whileInView="show" className='product-container mb-20'>
        <h2 >Featured Products</h2>
        <p>summer collection new modern design</p>
          <div className='product-con'>
            {products.map((product) => <Products key={products._id} product={product} />)}
          </div>
      </motion.div>
      

      <motion.div variants={slideIn('right', 'tween', 0.9, 1)}
      initial="hidden" whileInView="show" className='nt-6 gap-10 flex justify-center items-center' style={{ backgroundImage: `url(${banner.src})`, height: '50vh' }}>
       
          <div className='explore'>
            <h1 className='text-white text-xl'>Up to 70% off - All T-Shirt & accessories</h1>
            <Link href='/shop'>
              <button className="btn-banner ">Explore</button>
            </Link>
          </div>


      </motion.div>

      <motion.div variants={slideIn('left', 'tween', 0.9, 1)}
      initial="hidden" whileInView="show" className='product-container1'>
        <h2>New Arrivals</h2>
            <div className='product-con'>
                {newArrivalsData?.map((product) => <NewArrivals key={product._id} product={product} /> )}
            </div>
      </motion.div>

      <div>
        <FooterBanner />
      </div>


    </section>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const newArrivalsQuery = '*[_type == "newArrivals"]';
  const newArrivalsData = await client.fetch(newArrivalsQuery)

  return {
    props: { products, newArrivalsData }
  };
}
