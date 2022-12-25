import React from 'react';
import Image from 'next/image';
import b1 from '../public/blog/b1.jpg';
import b3 from '../public/blog/b3.jpg';
import b6 from '../public/blog/b6.jpg';
import b2 from '../public/blog/b2.jpg';
import b4 from '../public/blog/b4.jpg';
import Link from 'next/link';
import blog from '../public/banner/b19.jpg';
import { motion } from 'framer-motion';
import { slideIn, navVariants } from '../utils/motion';

const Blog = () => {
  return (
    <section className='overflow-x-hidden'>
      <motion.div variants={navVariants} initial="hidden" whileInView="show" className='page-header-blog' style={{ backgroundImage: `url(${blog.src})` }}>
        <h2>Find Out More</h2>

      </motion.div>   

      <div className='blog'>

        <motion.div variants={slideIn('left', 'tween', 0.9, .7)}
      initial="hidden" whileInView="show" className='blog-box'>
          <div className='blog-img'>
            <Image src={b1} alt="blog-img1" height={500}/>
          </div>
          <div className='blog-details'>
            <h4>The cotton zip-up Leggings</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quidem commodi quo molestias nulla nobis soluta eveniet, laudantium nam architecto perferendis, veniam possimus, voluptatem laboriosam facere debitis. Commodi, omnis architecto!</p>
            <Link href={'./Blog'}>
              <a>CONTINUE READING</a>
            </Link>
          </div>
          <h1>13/01</h1>
        </motion.div>

        <motion.div variants={slideIn('right', 'tween', 0.9, .7)}
      initial="hidden" whileInView="show" className='blog-box'>
          <div className='blog-img'>
            <Image src={b3} alt="blog-img1" height={400}/>
          </div>
          <div className='blog-details'>
            <h4>Zanary Collections</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quidem commodi quo molestias nulla nobis soluta eveniet, laudantium nam architecto perferendis, veniam possimus, voluptatem laboriosam facere debitis. Commodi, omnis architecto!</p>
            <Link href={'./Blog'}>
              <a>CONTINUE READING</a>
            </Link>
          </div>
          <h1>13/01</h1>
        </motion.div>

        <motion.div variants={slideIn('left', 'tween', 0.9, .7)}
      initial="hidden" whileInView="show" className='blog-box'>
          <div className='blog-img'>
            <Image src={b6} alt="blog-img1" height={500}/>
          </div>
          <div className='blog-details'>
            <h4>Healthy Living</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quidem commodi quo molestias nulla nobis soluta eveniet, laudantium nam architecto perferendis, veniam possimus, voluptatem laboriosam facere debitis. Commodi, omnis architecto!</p>
            <Link href={'./Blog'}>
              <a>CONTINUE READING</a>
            </Link>
          </div>
          <h1>13/01</h1>
        </motion.div>

        <motion.div variants={slideIn('right', 'tween', 0.9, .7)}
      initial="hidden" whileInView="show" className='blog-box'>
          <div className='blog-img'>
            <Image src={b2} alt="blog-img1" height={500}/>
          </div>
          <div className='blog-details'>
            <h4>Twin Collections</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quidem commodi quo molestias nulla nobis soluta eveniet, laudantium nam architecto perferendis, veniam possimus, voluptatem laboriosam facere debitis. Commodi, omnis architecto!</p>
            <Link href={'./Blog'}>
              <a>CONTINUE READING</a>
            </Link>
          </div>
          <h1>13/01</h1>
        </motion.div>

        <motion.div variants={slideIn('left', 'tween', 0.9, .7)}
      initial="hidden" whileInView="show" className='blog-box'>
          <div className='blog-img'>
            <Image src={b4} alt="blog-img1" height={500}/>
          </div>
          <div className='blog-details'>
            <h4>The cotton zip-up Leggings</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quidem commodi quo molestias nulla nobis soluta eveniet, laudantium nam architecto perferendis, veniam possimus, voluptatem laboriosam facere debitis. Commodi, omnis architecto!</p>
            <Link href={'./Blog'}>
              <a>CONTINUE READING</a>
            </Link>
          </div>
          <h1>13/01</h1>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
