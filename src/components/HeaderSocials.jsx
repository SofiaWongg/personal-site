import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {FaHandshake} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href='https://www.linkedin.com/in/sofiawong2024/' target="_blank"><BsLinkedin /></a>
    <a href='https://github.com/SofiaWongg' target="_blank"><BsGithub /></a>
    <a href='https://unc.joinhandshake.com/stu/users/24956215' target="_blank"><FaHandshake /></a>
    </div>
  )
}

export default HeaderSocials