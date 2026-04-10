import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import img1 from '../../assets/movie_book.png';
import quizmaker_img from '../../assets/aiquizmaker.jpg'
import couching_site from '../../assets/couching_site.png'
import vidyahub from '../../assets/vidyahub.png'

const data = [
  {
    id: 1,
    image: quizmaker_img,
    title: "AI Quiz-Maker",
    seeProject: "https://quizmaker-frontend.vercel.app/",
    github: "https://github.com/Kusaram99/Quiz_Web_Application"
  },
  {
    id: 2,
    image: couching_site,
    title: "Couching Site Demo",
    seeProject: "https://couching-site-demo.vercel.app/",
    github: "https://github.com/Kusaram99/Couching_site_demo"
  },
  {
    id: 3, 
    image: img1,
    title: "Book my Show",
    seeProject: "https://book-my-show-frontend-shyl.vercel.app/",
    github: "https://github.com/Kusaram99/book_show"
  },
  {
    id: 4,
    image: "https://rb.gy/99ttog",
    title: "E-Commerce Web App",
    seeProject: "https://e-commerce-fnd.vercel.app/",
    github: "https://github.com/Kusaram99/E-Commerce-WebApp"
  },
  {
    id: 5,
    image: "https://fileserver.teachstarter.com/thumbnails/34058-mab-flashcards-thumbnail-0-600x400.png",
    title: "Flash card Generator",
    seeProject: "https://flashcard-six.vercel.app/",
    github: "https://github.com/Kusaram99/E-Commerce-WebApp"
  },
  {
    id: 6, 
    image: vidyahub,
    title: "VidyaHub - Learning Platform",
    seeProject: "https://vidyahub-three.vercel.app/",
    github: "https://github.com/Kusaram99/VidyaHub" 
  }
]

const Portfolio = () => {
    return (
        <section id='portfolio' className="py-32 px-6 md:px-12 max-w-7xl mx-auto z-10 relative">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h5 className="text-emerald-400 font-medium tracking-wider uppercase text-sm mb-2">My Recent Work</h5>
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-500">Portfolio</h2>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {data.map(({ id, image, title, github, seeProject }, index) => (
                    <motion.article 
                        key={id} 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className='group flex flex-col bg-zinc-900/40 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-500/30 transition-all duration-500 shadow-xl'
                    >
                        <div className='w-full h-56 overflow-hidden relative'>
                            <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                            <img loading='lazy' src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-2xl font-semibold text-zinc-100 mb-6">{title}</h3>
                            <div className="flex items-center gap-4 mt-auto">
                                <a href={seeProject} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 flex-1 py-3 px-4 rounded-xl bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 hover:text-white border border-white/5 transition-all duration-300">
                                    <ExternalLink className="w-4 h-4"/> Live
                                </a>
                                <a href={github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 flex-1 py-3 px-4 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300">
                                    <FaGithub className="w-4 h-4"/> Code
                                </a>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
            
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className='mt-16 flex justify-center'
            >
                <a href='https://github.com/Kusaram99' target='_blank' rel="noreferrer" className='px-10 py-4 rounded-full bg-transparent border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500 hover:text-black font-semibold transition-all duration-300 shadow-lg hover:shadow-emerald-500/20'>
                    See more on GitHub
                </a>
            </motion.div>
        </section>
    );
}

export default Portfolio;