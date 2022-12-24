import React from 'react';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';

function Newsletter() {
  return (
    <motion.div variants={navVariants}
    initial="hidden" whileInView="show" className="flex items-center newsletter1 justify-between p-5 bg-[#ae2cc2] m-10 h-[25vh] rounded-[10px]">
        <h1 className='text-[1.8em] text-white font-semibold'>Sign up for our newsletter</h1>
        <div>
            <input type="email" placeholder="Enter your email" className="border px-2 py-1 rounded-md focus:outline-none focus:shadow-outline-blue" />
        <button className="mt-3 ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full focus:outline-none focus:shadow-outline-blue">
            Subscribe
        </button>
        </div>
    </motion.div>
  );
}

export default Newsletter;
