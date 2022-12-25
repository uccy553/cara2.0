import Image from 'next/image';
import { Feature } from '../components';
import about from '../public/about/about.png';
import people1 from '../public/people/peeps2.png';
import people2 from '../public/people/peeps4.jpg';
import people3 from '../public/people/peeps1.jpg';
import banner from '../public/about/banner.png';
import { motion } from 'framer-motion';
import { slideIn, navVariants } from '../utils/motion';


const About = () => {
  return (
    <>
    <motion.div  variants={navVariants} initial="hidden" whileInView="show" className='page-header3' style={{ backgroundImage: `url(${banner.src})` }}>
       <h2 style={{color: '#fff'}}>#KnowUs</h2>  
        <p style={{color: '#fff'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea cumque dolor explicabo in error ut, facilis provident numquam, nam  </p>
    </motion.div>

    <div className='about-head'>
        <motion.div variants={slideIn('left', 'tween', 0.9, .6)}
      initial="hidden" whileInView="show">
            <Image src={about} alt="about us" width={4000} height={2500} />
        </motion.div>
      
      <motion.div variants={slideIn('right', 'tween', 0.9, .6)}
      initial="hidden" whileInView="show">
        <h2>Who we are?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sapiente vel corrupti repellendus accusamus a soluta. Enim quam nobis in explicabo id dolor dolorum sit, distinctio, qui ab, aut similique. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis ipsa aut soluta fuga molestiae porro nostrum vitae facilis assumenda ipsam! Aspernatur at deleniti et vel distinctio eos temporibus sint voluptatum.</p><abbr title="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, aliquid rem quod commodi aliquam saepe laudantium libero reiciendis, debitis eligendi quisquam eos eius nobis aut perspiciatis praesentium a harum sunt? lo</abbr>

        <br /><br />
        <marquee bgcolor="#ccc" behavior="alternate" scrolldelay="100" scrollamount="5" width="100%">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sint exercitationem, error ad vitae enim? Obcaecati, eius nemo. Consequatur id perferendis assumenda provident aut delectus minus. Sunt doloribus consequuntur aliquam!</marquee>
      </motion.div>
    </div>

    <h1 style={{ textAlign: 'center', marginBottom: '15px', fontSize: '2em' }}>Our people</h1>
    <div className='ourPeople'>
      <motion.div variants={slideIn('left', 'tween', 0.9, .6)}
      initial="hidden" whileInView="show">
        <Image src={people1} alt="people1" className="about-img" />
        <h4>Amanda Hoos</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sint exercitationem, error ad vitae enim? Obcaecati, eius nemo. Consequatur id perferendis assumenda provident aut delectus minus.</p>
      </motion.div>

      <motion.div variants={navVariants}
      initial="hidden" whileInView="show">
        <Image src={people2} alt="people1" className="about-img" />
        <h4>Lisa Lou</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sint exercitationem, error ad vitae enim? Obcaecati, eius nemo. Consequatur id perferendis assumenda provident aut delectus minus.</p>
      </motion.div>

      <motion.div variants={slideIn('right', 'tween', 0.9, .6)}
      initial="hidden" whileInView="show" style={{ marginBottom: 100 }}>
        <Image src={people3} alt="people1" className="about-img" />
        <h4>Jessica Anos</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sint exercitationem, error ad vitae enim? Obcaecati, eius nemo. Consequatur id perferendis assumenda provident aut delectus minus.</p>
      </motion.div>
    </div>

    <Feature />
    
    </>


  )
}

export default About
