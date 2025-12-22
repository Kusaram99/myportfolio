import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {GiCrystalGrowth} from 'react-icons/gi';
import { useState } from 'react';

const Nav = () => {

  const [isActive, setIsActive] = useState('#');


  return (
    <nav>
      <a href='#' onClick={()=> setIsActive("#")}className={isActive==='#'?"active":""}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setIsActive("#about")} className={isActive==='#about'?"active":""}><AiOutlineUser /></a>
      <a href='#skill' onClick={() => setIsActive("#skill")} className={isActive==='#skill'?"active":""}><RiServiceLine/></a>
      <a href='#portfolio' onClick={() => setIsActive("#portfolio")} className={isActive==='#portfolio'?"active":""}><GiCrystalGrowth/></a>
      <a href='#contact' onClick={() => setIsActive("#contact")} className={isActive==='#contact'?"active":""}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav