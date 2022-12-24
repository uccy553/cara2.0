import Image from 'next/image'
import people1 from '../public/people/1.png'
import people2 from '../public/people/2.png'
import people3 from '../public/people/3.png'
import { MdLocationOn, MdEmail, MdWatchLater } from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai'
import banner from '../public/about/banner.png'
import { motion } from 'framer-motion'
import { slideIn, navVariants } from '../utils/motion'

const Contact = () => {
  return (
    <section className='overflow-x-hidden'>
      <motion.div variants={navVariants} initial='hidden' whileInView='show' className='page-header2' style={{ backgroundImage: `url(${banner.src})` }}>
        <p>#Let's Talk</p>
      </motion.div>
      <div className='contact-details'>
        <motion.div variants={slideIn('left', 'tween', 0.9, .4)}
      initial='hidden' whileInView='show' className='details'>
          <h2>Visit one of our agencies location or contact us today</h2>
          <h3>Head Office</h3>
          <div>
            <div className='ic'>
                <MdLocationOn className='icon' />
                <p>562 Ojota Road, street 23, Lagos</p>
            </div>

          <div className='ic'>
              <MdEmail className='icon'/>
              <p>sample@email.com</p>
          </div>
          
          <div className='ic'>
              <AiFillPhone className='icon'/>
              <p>+2348034847764 / +2349037464636</p>
          </div>

          <div className='ic'>
              <MdWatchLater className='icon'/>
              <p>Monday to Saturday 9am - 18:00</p>
          </div>
          </div>
        </motion.div>

        <motion.div variants={slideIn('right', 'tween', 0.9, .4)}
      initial='hidden' whileInView='show' className='map'>
        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4833955742415!2d3.412033349702867!3d6.460274295303441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b3602f67e5f%3A0xc383098fd15fe567!2sOsborne%20Rd%2C%20Dolphine%20Estate%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1661621908310!5m2!1sen!2sng' title='Location' ></iframe>
        </motion.div>


      </div>

      <div className='form-details'>
        <motion.form variants={slideIn('left', 'tween', 0.9, .4)}
      initial='hidden' whileInView='show'>
          <h3 style={{margin: '10px'}}>Leave A Message</h3>
          <input type='text' placeholder='enter your name' />
          <input type='email' placeholder='enter your email' />
          <input type='text' placeholder='subject' />
          <textarea placeholder='your message'></textarea>
          <button className='btn-sub'>Submit</button>
        </motion.form>

        <motion.div variants={slideIn('right', 'tween', 0.9, .4)}
      initial='hidden' whileInView='show' className='people'>
          <div>
            <Image src={people1} alt='people1' width={80} height={80} />
            <p><span>Ojo Akpan</span>Senior Marketing manager <br /> phone: +23480386453 <br /> email: sampleemail@mail.com </p>
          </div>

          <div>
               <Image src={people2} alt='people2' className='image' />
               <p><span>Kola Daniel</span> Sales Representative<br /> phone: +23480874553 <br/> email: sampleemail@mail.com </p>
           </div>

          <div>
               <Image src={people3} alt='people2' className='image' />
               <p><span>Kate Odo</span> Senior Marketing manager<br /> phone: +23480874553 <br/> email: sampleemail@mail.com </p>
           </div>


        </motion.div>

      </div>

    </section>
  )
}

export default Contact
