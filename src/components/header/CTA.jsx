import React from 'react';
import CV from '../../assets/Kusaram_Pawara_CV.pdf';



const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download={CV} className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Lets Talk</a>
    </div>
  )
}

export default CTA