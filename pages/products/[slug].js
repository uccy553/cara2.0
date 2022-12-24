import React, { useState } from 'react';
import { urlFor, client } from '../../lib/client';
import { AiFillMinusCircle } from 'react-icons/ai';
import { MdAdd } from 'react-icons/md';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Products } from '../../components';
import { useStateContext } from '../../context/stateContext';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slideIn } from '../../utils/motion';



const ProductDetails2 = ({ pro2, pro1 }) => {
  
    const { image, name, details, price } = pro2 || {};
    const [index, setIndex] = useState(0);
    // const [quants, setQuants] = useState(0)
    const { decQty, incQty, qty, onAdd } = useStateContext();

    const handleBuyNow = () => {
        onAdd(pro2, qty);
    }
   
  return (
    <>
        
        <div className='product-detail-container mt-10'>
            <motion.div variants={slideIn('left', 'tween', 0.9, .7)}
            initial="hidden" whileInView="show">
                <div className='image-container'>
                    {image && (
                        <img src={urlFor(image && image[index])} alt="product-image" className='product-detail-image' />
                    )}
                </div>
                    <div className='small-images-container'>
                        {image?.map((item, i) => (
                            <img key={i} src={urlFor(item)} alt="small-image" className={i === index ? 'rounded-[8px] bg-[#ebebeb] w-[90px] h-[90px] cursor-pointer' : 'small-image'} onMouseEnter={() => setIndex(i)} />
                        ))}
                   
                </div>


            </motion.div>

            <motion.div variants={slideIn('right', 'tween', 0.9, .7)}
            initial="hidden" whileInView="show" className='w-full'>
                <h1 className='text-[2.4em] font-bold'>{name}</h1>
                <div className='mt-[10px] text-yellow-400 flex gap-[5px] items-center'>
                    <div className='flex'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>
                    <p className='text-black'>(20)</p>
                </div>
                <div className='w-[90%]'>
                    <h4 className='text-xl font-semibold text-center'>Details: </h4>
                    <p className='text-[1.3em] text-center'>{details}</p>
                    <p className='font-bold text-[1.8em]'>${price}</p>
                </div>

                <div className='quantity'>
                    <h3 className='font-semibold text-xl'>Quantity: </h3>
                    <div className='mt-3 flex'>
                        <div className='minus-btn'>
                            <button className='dec-btn' type='button' onClick={decQty}><AiFillMinusCircle /></button>
                        </div>

                        <div className='qty'>
                            <p>{qty}</p>
                        </div>

                        <div className='plus-btn'>
                            <button className='inc-btn' type='button' onClick={incQty}><MdAdd color='white' /></button>
                        </div>
                    </div>
                    
                </div>

                <div className='buttons'>
                    <button type="button" className='add-to-cart' onClick={() => onAdd(pro2, qty)}>Add to Cart</button>
                    <Link href={'/carts'}>
                        <button type="button" className='buy-now' onClick={handleBuyNow}>Buy Now</button>
                    </Link>
                </div>
            </motion.div>
        </div>

        <div className='maylike-products-wrapper'>
            <h2>You may also like</h2>
            <div className='marquee'>
                <div className='maylike-products-container track'>{pro1.map((item) => (
                    <Products key={item._id} product={item} />
                ))}</div>
            </div>
        </div>
    </>
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"]{
        slug {
            current
        }
    }
    `;


    const prod = await client.fetch(query);
    const paths = prod?.map((pro) => ({
        params: {
            slug: pro.slug.current
        }
    }));
    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "product" && slug.current == '${slug}' ][0]`;   
    const productQuery = '*[_type == "product"]'
    const pro2 = await client.fetch(query);
    const pro1 = await client.fetch(productQuery);
   
  
    return {
      props: { pro2, pro1}
    }
  }

export default ProductDetails2