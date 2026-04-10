import React from 'react';
import ME from '../../assets/profile2.png';
import { VscFolderLibrary } from 'react-icons/vsc';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id='about' className="py-32 px-6 md:px-12 max-w-7xl mx-auto z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h5 className="text-emerald-400 font-medium tracking-wider uppercase text-sm mb-2">Get to know</h5>
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-500">About Me</h2>
      </motion.div>

      <div className='flex flex-col md:flex-row gap-16 lg:gap-24 items-center justify-center'>
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='w-full md:w-1/2 lg:w-1/3 flex justify-center'
        >
          <div className="relative group w-64 h-64 md:w-80 md:h-80 aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-tr from-emerald-500/20 to-zinc-800/40 p-1 border border-white/10 backdrop-blur-sm">
            <div className="w-full h-full rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">
                <img
                loading='lazy'
                className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105'
                src={ME}
                alt="about me profile" />
            </div>
          </div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full md:w-1/2 flex flex-col items-center md:items-start"
        >
          <div className="flex flex-wrap gap-4 justify-center md:justify-start w-full mb-8"> 
            <article className='flex flex-col items-center gap-3 p-6 rounded-2xl bg-zinc-800/40 backdrop-blur-md border border-white/10 w-full sm:w-64 hover:bg-zinc-800/80 hover:border-emerald-500/30 transition-all duration-300 shadow-xl group'>
              <VscFolderLibrary className='text-3xl text-emerald-400 group-hover:-translate-y-1 transition-transform duration-300' />
              <h5 className="text-zinc-200 font-semibold text-lg">Projects</h5>
              <small className="text-zinc-400 text-center">15+ Completed Hobby Projects</small>
            </article>
          </div>

          <p className="text-zinc-400 leading-relaxed text-center md:text-left mb-8 max-w-xl text-lg font-light">
            Seeking an innovative and challenging career in a growing organization which gives me an opportunity to utilize my
            skills and knowledge, providing a sturdy foundation for career growth.
          </p>

          <a href='#contact' className='px-8 py-3 rounded-full bg-zinc-100 text-black font-semibold hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300'>
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
