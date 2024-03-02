import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Tools</h3>
          <div className='experience__content'>
            <article className='experience__details'> 
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Figma</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'> 
              <BsPatchCheckFill />
              <div>
                <h4>Github</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'> 
              <BsPatchCheckFill />
              <div>
                <h4>AdobeXD</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'> 
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>AWS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'> 
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Bitbucket</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
          </div>
          <div className='experience__backend'>
          <h3>Languages</h3>
          <div className='experience__content'>
            <article className='experience__details'> 
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>SwiftUI</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'> 
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'> 
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Swift</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'> 
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Objective-C</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'> 
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
          </div>
      </div>
    </section>
  )
}

export default Experience