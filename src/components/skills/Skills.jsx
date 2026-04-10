import React from 'react';
import { motion } from 'framer-motion'

import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { TbBrandJavascript, TbSql } from 'react-icons/tb';
import { SiTailwindcss, SiExpress } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';
import { GrMysql } from 'react-icons/gr';
import { VscJson } from "react-icons/vsc";

const skillsFrontend = [
    { name: "HTML", icon: AiFillHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: TbBrandJavascript },
    { name: "React", icon: FaReact },
    { name: "Bootstrap", icon: FaBootstrap },
    { name: "Tailwind UI", icon: SiTailwindcss },
];

const skillsBackend = [
    { name: "NodeJS", icon: FaNodeJs },
    { name: "MongoDB", icon: DiMongodb },
    { name: "ExpressJS", icon: SiExpress },
    { name: "MySQL", icon: GrMysql },
    { name: "Jwt", icon: VscJson },
    { name: "SQL", icon: TbSql },
    { name: "Python", icon: FaPython },
];

const Skills = () => {
    return (
        <section id='skill' className="py-32 px-6 md:px-12 max-w-7xl mx-auto z-10 relative">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h5 className="text-emerald-400 font-medium tracking-wider uppercase text-sm mb-2">What Skills I Have</h5>
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-500">Skills</h2>
            </motion.div>

            <div className='flex flex-col lg:flex-row gap-12 w-full'>
                
                {/* Frontend Skills */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 bg-zinc-900/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl hover:border-emerald-500/20 transition-all duration-500"
                >
                    <h3 className="text-2xl font-semibold text-center text-zinc-100 mb-8 pb-4 border-b border-light/10">Frontend Development</h3>
                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-6'>
                        {skillsFrontend.map((skill, index) => (
                            <article 
                                key={index} 
                                className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-zinc-800/30 border border-zinc-700/50 hover:bg-zinc-800 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(16,185,129,0.1)] transition-all duration-300 shadow-inner group cursor-pointer"
                            >
                                <skill.icon className='text-4xl text-zinc-400 group-hover:text-emerald-400 transition-colors duration-300' />
                                <h4 className="text-zinc-300 font-medium text-sm text-center">{skill.name}</h4>
                            </article>
                        ))}
                    </div>
                </motion.div>

                {/* Backend Skills */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex-1 bg-zinc-900/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl hover:border-emerald-500/20 transition-all duration-500"
                >
                    <h3 className="text-2xl font-semibold text-center text-zinc-100 mb-8 pb-4 border-b border-light/10">Backend Development</h3>
                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-6'>
                        {skillsBackend.map((skill, index) => (
                            <article 
                                key={index} 
                                className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-zinc-800/30 border border-zinc-700/50 hover:bg-zinc-800 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(16,185,129,0.1)] transition-all duration-300 shadow-inner group cursor-pointer"
                            >
                                <skill.icon className='text-4xl text-zinc-400 group-hover:text-emerald-400 transition-colors duration-300' />
                                <h4 className="text-zinc-300 font-medium text-sm text-center">{skill.name}</h4>
                            </article>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Skills;