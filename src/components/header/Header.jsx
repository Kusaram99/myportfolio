import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./header.css";
import CTA from "./CTA";
// import Me from "../../assets/welcome.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => { 

  return (
    <motion.header
      initial={{ opacity: 0, translateY: 200 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kusaram Pawara</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        <CTA />
        <HeaderSocials />
        {/* <div className='me'>
          <img
            loading='lazy'
            src={Me}
            className="me-img"
            alt="me" />
        </div> */}

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
