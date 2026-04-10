import React from 'react';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithubSquare} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='flex items-center justify-center gap-6'>
        <a href="https://www.linkedin.com/in/kusaram-pawara-21a812318/" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-emerald-400 transform hover:-translate-y-1 transition-all duration-300">
            <FaLinkedin className="w-6 h-6"/>
        </a>
        <a href="https://github.com/Kusaram99" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-emerald-400 transform hover:-translate-y-1 transition-all duration-300">
            <FaGithubSquare className="w-6 h-6"/>
        </a>
    </div>
  )
}

export default HeaderSocials;