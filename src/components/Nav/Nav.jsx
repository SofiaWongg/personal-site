import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlinePhone} from 'react-icons/ai'
import {CgWebsite} from 'react-icons/cg'
import {useState} from 'react'

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
      <a href='#home' onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiOutlineBook /></a>
      <a href='#projects' onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><CgWebsite /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlinePhone /></a>
    </nav>
  )
}

export default Nav