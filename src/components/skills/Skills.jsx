import React from 'react';
import './skills.css';
import { motion } from 'framer-motion'

import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';
import { FaBootstrap } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';
import { GrMysql } from 'react-icons/gr';
import { SiExpress } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { VscJson } from "react-icons/vsc";
import { TbSql } from "react-icons/tb";
import { FaPython } from "react-icons/fa";


// import {jslogo} from '../../assets/js-logo.png';



const Skills = () => {
    const [hasAnimated, setHasAnimated] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];

            if (entry.isIntersecting && !hasAnimated) {
                setHasAnimated(true);
            }
        });

        observer.observe(document.querySelector('#skill'));

        return () => {
            observer.disconnect();
        };
    }, [hasAnimated]);

    return (
        <motion.section
            initial={{ opacity: 0, translateY:  250 }}
            animate={hasAnimated ? { opacity: 1, translateY: 0 } : {}}
            transition={{ duration: 0.6 }}
            id='skill'>
            <h5>What Skills I Have</h5>
            <h2>Skills</h2>

            <div className='container skill__container'>
                <div className="skill__frontend">
                    <h3>Frontend Development</h3>
                    <div className='skill__content'>
                        <article className="skill__detail">
                            <AiFillHtml5 className='skill__detail-icon' />
                            <div><h4>HTML</h4></div>

                        </article>
                        <article className="skill__detail">
                            <FaCss3Alt className='skill__detail-icon' />
                            <div><h4>CSS</h4></div>

                        </article>
                        <article className="skill__detail">
                            <TbBrandJavascript className='skill__detail-icon' />
                            <div><h4>JavaScript</h4></div>

                        </article>
                        <article className="skill__detail">
                            <FaReact className='skill__detail-icon' />
                            <div><h4>React</h4></div>

                        </article>
                        <article className="skill__detail">
                            <FaBootstrap className='skill__detail-icon' />
                            <div><h4>Bootstrap</h4></div>

                        </article>
                        <article className="skill__detail">
                            <SiTailwindcss className='skill__detail-icon' />
                            <div><h4>Tailwind UI</h4></div>

                        </article>
                    </div>
                </div>
                <div className="skill__frontend">
                    <div> <h3>Backend Development</h3> </div>
                    <div className='skill__content'>
                        <article className="skill__detail">
                            <FaNodeJs className='skill__detail-icon' />
                            <div><h4>NodeJS</h4></div>

                        </article>
                        <article className="skill__detail">
                            <DiMongodb className='skill__detail-icon' />
                            <div><h4>MongoDB</h4></div>

                        </article>
                        <article className="skill__detail">
                            <SiExpress className='skill__detail-icon' />
                            <div><h4>ExpressJS</h4></div>

                        </article>
                        <article className="skill__detail">
                            <GrMysql className='skill__detail-icon' />
                            <div><h4>MySQL</h4></div>

                        </article>
                        <article className="skill__detail">
                            <VscJson className='skill__detail-icon' />
                            <div><h4>Jwt</h4></div>

                        </article>
                        <article className="skill__detail">
                            <TbSql className='skill__detail-icon' />
                            <div><h4>SQL</h4></div>

                        </article>
                        <article className="skill__detail">
                            <FaPython className='skill__detail-icon' />
                            <div><h4>Python</h4></div>

                        </article>
                    </div>

                </div>

            </div>

        </motion.section>
    )
}

export default Skills