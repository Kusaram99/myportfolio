import React from 'react';
import './portfolio.css';
import { motion } from 'framer-motion';
import img1 from '../../assets/movie_book.png';
import quizmaker_img from '../../assets/aiquizmaker.jpg'
console.log(img1)



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
    image: "https://shorturl.at/44Yl1",
    title: "Routine Master",
    seeProject: "https://todo-frontend-kappa-blond.vercel.app/",
    github: "https://github.com/kusaram99"
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
    image: "https://www.digitalsilk.com/wp-content/uploads/2020/11/website-marketing-strategy-hero-image.png",
    title: "Marketing Website",
    seeProject: "https://figma-html-landing-page.vercel.app/",
    github: "https://github.com/Kusaram99/oscare-internship/tree/frontend" 
  }
 
]


const Portfolio = () => {

  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
      }
    });

    observer.observe(document.querySelector('#portfolio'));

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  return (
    <motion.section
      initial={{ opacity: 0, translateY:  250 }}
      animate={hasAnimated ? { opacity: 1, translateY: 0 } : {}}
      transition={{ duration: 0.6 }}
      id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github, seeProject }) => {
            return (
              <article key={id} className='portfolio__items'>
                <div className='portfolio__item-image'>
                  <img loading='lazy' src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio-item-cta">
                  <a href={seeProject} className="btn">See Project</a>
                  <a href={github} className="btn btn-primary">Github</a>
                </div>
              </article>
            )
          })
        }

      </div>
      <div className='seemore_btn'>
        <a href='https://github.com/Kusaram99' target='_blanck'>See more</a>
      </div>
    </motion.section>
  )
}

export default Portfolio