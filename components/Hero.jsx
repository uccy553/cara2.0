import Link from 'next/link';
import herobtn from '../public/button.png';
import hero from '../public/hero4.png';
import { motion } from 'framer-motion';
import { slideIn, staggerContainer } from '../utils/motion';

const Hero = () => {
  return (
      <motion.section variants={slideIn('left', 'tween', 0.9, .4)}
      initial="hidden" whileInView="show" className="hero" style={{ backgroundImage: `url(${hero.src})` }}>
        <p>trade-in-offer</p>
        <h1 style={{ lineHeight: '60px', fontSize: '50px' }}>
          Super Value Deals
          <br /> <span style={{ color: '#088178' }}>On All Products</span>
        </h1>
        <span>save more with coupons & up to 70% off</span>
        <Link href="/Shop">
          <button style={{ backgroundImage: `url(${herobtn.src})` }}>Shop Now</button>
        </Link>
      </motion.section>
  );
};

export default Hero;
