import React from 'react';
import './services.css';

import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id="services">
      
      <h5>What I Offer</h5>
      <h2>Services</h2>


      

      <div className='conatainer services__container'>


        
      <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Setup excellent hosting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Map out design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Error-handling</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive and Interactive applications</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Gather and refine specifications and requirements based on technical requirements </p>
            </li>
          </ul>
        </article>
         {/* ----WEB development---- */}



        <article className="service">
          <div className="service__head">
            <h3>Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Build responsive cross-browser-compatible websites using HTML, CSS , Javacript and ReactJS</p>
              
            </li>
           
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Write high-quality, scalable and reusable code </p>
              
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create Highly responsive and presentable pages </p>
             
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Develop new user-facing features and web applications with best practices</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Product structure and strategy</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Accessible and inclusive design</p>
            </li>
          </ul>
        </article>  
      {/*----- design ----- */}







        <article className="service">
          <div className="service__head">
            <h3>Developer tools</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Track and make changes to source code using versioin control system</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Inspect and debugg</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Analyse pages</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Editing CSS and JS files</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Check responsiveness for different screen sizes</p>
            </li>

            
            
          </ul>
        </article>
        {/*---- Develpoer Tools ---- */}
        
      </div>
    </section >
  )
}

export default Services