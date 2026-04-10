import React from "react";
import { motion } from "framer-motion";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Header = () => { 
  return (
    <header className="relative w-full h-screen flex flex-col items-center justify-center text-center z-10 overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 relative z-10 flex flex-col items-center gap-6"
      >
        <motion.h5 variants={itemVariants} className="text-emerald-400 font-medium tracking-wider uppercase text-sm md:text-base">
          Hello I'm
        </motion.h5>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500 pb-2">
          Kusaram Pawara
        </motion.h1>
        
        <motion.h5 variants={itemVariants} className="text-zinc-400 text-lg md:text-xl max-w-2xl font-light">
          Fullstack Developer
        </motion.h5>

        <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center gap-8">
            <CTA />
            <HeaderSocials />
        </motion.div>

        <motion.a 
          variants={itemVariants}
          href="#about" 
          className="absolute -bottom-24 text-zinc-500 hover:text-emerald-400 transition-colors duration-300 animate-bounce text-sm"
        >
          Scroll Down &darr;
        </motion.a>
      </motion.div>
    </header>
  );
};

export default Header;
