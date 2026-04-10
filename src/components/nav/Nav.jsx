import React from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {GiCrystalGrowth} from 'react-icons/gi';
import { useState } from 'react';

const Nav = () => {
  const [isActive, setIsActive] = useState('#');

  const navLinks = [
    { href: '#', icon: <AiOutlineHome /> },
    { href: '#about', icon: <AiOutlineUser /> },
    { href: '#skill', icon: <RiServiceLine/> },
    { href: '#portfolio', icon: <GiCrystalGrowth/> },
    { href: '#contact', icon: <BiMessageSquareDetail/> }
  ];

  return (
    <div className="fixed bottom-8 w-full flex justify-center z-50">
        <nav className="flex items-center gap-4 px-6 py-4 rounded-full bg-black/30 backdrop-blur-md border border-white/10 shadow-2xl">
        {navLinks.map((link) => (
            <a 
                key={link.href}
                href={link.href} 
                onClick={()=> setIsActive(link.href)}
                className={`p-3 rounded-full transition-all duration-300 flex items-center justify-center
                    ${isActive === link.href 
                        ? "bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.5)]" 
                        : "text-zinc-400 hover:text-white hover:bg-white/10"
                    }`}
            >
                {link.icon}
            </a>
        ))}
        </nav>
    </div>
  )
}

export default Nav;