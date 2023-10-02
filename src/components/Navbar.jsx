import  { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Navbar = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const controls = useAnimation();
  
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
  
      if (currentScrollPos > prevScrollPos) {
        // Scrolling down, hide the navbar
        setIsNavbarVisible(false);
      } else {
        // Scrolling up
        if (currentScrollPos < 10) {
          // If the user scrolls up by a small distance (e.g., 10 pixels), show the navbar
          setIsNavbarVisible(true);
        }
      }
  
      // Update the previous scroll position
      setPrevScrollPos(currentScrollPos);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <motion.nav
        className={`fixed top-0 w-full ${isNavbarVisible ? 'visible' : 'hidden'}`}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: '-100%' },
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="fixed w-[1512px] h-[99px] top-0 left-0 bg-[#1a1a1a]">
          <div  className="fixed w-[243px] h-[17px] top-[44px] left-[75px] text-white"> <b>THE</b> HONEST COMPANY</div>
          <div className="inline-flex items-center gap-[350px] relative top-[20px] left-[754px]">           
            <div className="relative w-[10.5px] h-[10.5px]" />
          </div>
        </div>

      </motion.nav>
    );
  };
  
  export default Navbar;