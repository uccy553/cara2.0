import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import im1 from '../public/banner/b17.jpg';
import { motion } from 'framer-motion';
import im2 from '../public/banner/b10.jpg';
import { slideIn } from '../utils/motion';


const FooterBanner = () => {
  return (
    <section className='flex mt-10'>
        <motion.div variants={slideIn('left', 'tween', 0.9, 1)}
      initial="hidden" whileInView="show">
            <Link href="/shop">
                <div className='sm-banner'>
                    <div className='banner-box' style={{ backgroundImage: `url(${im1.src})` }}>
                        <h4>crazy deals</h4>
                        <h2>buy 1 get 1 free</h2>
                        <span>The best classic dress is on sale at cara</span>
                        <button className='btn-banner'>Learn more</button>
                    </div>
                </div>
            </Link>
        </motion.div>

        <motion.div variants={slideIn('right', 'tween', 0.9, 1)}
      initial="hidden" whileInView="show">
        <Link href="/shop">
            <div className='sm-banner'>
                <div className='banner-box banner-box2' style={{ backgroundImage: `url(${im2.src})` }}>
                    <h4>spring/summer</h4>
                    <h2>Upcoming season</h2>
                    <span>The best classic dress is on sale at cara</span>
                    <button className='btn-banner'>Collection</button>
                </div>
            </div>
            </Link>
        </motion.div>


    </section>
  )
}

export default FooterBanner