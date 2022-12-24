import { useState } from 'react';
import NavItem from './NavItem';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.png';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import CartBag from './CartBag';



const Navbar = () => {
  const nav = [
    { text: 'Home', href: '/' },
    { text: 'Shop', href: '/shop' },
    { text: 'Contact', href: '/contact' },
    { text: 'About', href: '/about' },
    { text: 'Blog', href: '/blog' },
  ];

  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <motion.nav variants={navVariants}
        initial="hidden"
        whileInView="show" className={`nav`}>
        <Link href={'/'}>
          <a>
            <Image src={logo} alt="logo" />
          </a>
        </Link>
        <Link href="/carts">
          <a>
            <CartBag />
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? 'active' : ''} nav__menu-list`}>
          {nav.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
