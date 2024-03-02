import React from 'react'
import './about.css'
import ME from '../../assets/assets/backpacking.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import {AiFillFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="me"/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3 Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>4 clients</small>
            </article>
            <article className='about__card'>
              <AiFillFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>4 completed projects</small>
            </article>
          </div>

          <p>Hi, my name is Sofia Wong. I am a iOS Developer and UI/UX Designer, and welcome to my page! I enjoy designing and building clean, friendly, and fun designs for websites, apps, and games that focus on accessibility and style. 

Outside of being a designer/developer, I am an avid backpacker, runner, and general sports enthusiast. I am outgoing and love to create collaborative pieces of art and music! 

</p>

      <a href='#contact' className='btn btn-primary'>Lets Talk</a>

        </div>
      </div>

    </section>
  )
}

export default About