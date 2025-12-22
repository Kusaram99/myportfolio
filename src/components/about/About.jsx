import React from 'react';
import './about.css';
import ME from '../../assets/profile2.png';
import { FaUsers } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import { motion } from 'framer-motion';

const About = () => {
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
      }
    });

    observer.observe(document.querySelector('#about'));

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  return (
    <motion.section
      initial={{ opacity: 0, translateY: 250 }}
      animate={hasAnimated ? { opacity: 1, translateY: 0 } : {}}
      transition={{ duration: 0.6 }}
      id='about'
    >
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img
              loading='lazy'
              className='about-me-img'
              src={ME}
              alt="about-me-images" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaUsers className='about__icon' />
              <h5>Clients</h5>
              <small>served client as a freelancer</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>15+ Completed Hobby Projects</small>
            </article>
          </div>

          <p>
            Seeking innovative and challenging career in a growing organization which gives me an opportunity to utilize my
            skills and knowledge and provides me an opportunity for career growth.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

