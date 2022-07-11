import React from 'react'
import './about.css'
import ME from '../../assets/assets/nobackcropped.png'
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
              <small>1 Year Working</small>
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

          <p>That's enough talking about me in the third person....

I'm just someone who falls off of colorful rocks at my bouldering gym, plays DND with my friends, and loves boba!

I'm passionate about designing tools that other people can freely use to enhance their experience in some of my favorite games. I credit my ability in continuing to make headway in these projects through careful, but non-intrusive, planning (kanban boards are my best friends), as well as motivation from my peers who enjoy the things I create.</p>

      <a href='#contact' className='btn btn-primary'>Lets Talk</a>

        </div>
      </div>

    </section>
  )
}

export default About