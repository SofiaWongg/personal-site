import React from 'react'
import './projects.css'
import IMG1 from '../../assets/assets/portfolio1.jpg'
import IMG2 from '../../assets/assets/portfolio2.jpg'
import IMG3 from '../../assets/assets/portfolio3.jpg'

const Projects = () => {

  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Title of Project',
      github: 'https://github.com',
      demo: 'https://github.com'
    }, 

    {
      id: 2,
      image: IMG2,
      title: 'Title of Project',
      github: 'https://github.com',
      demo: 'https://github.com'
    }, 

    {
      id: 3,
      image: IMG3,
      title: 'Title of Project',
      github: 'https://github.com',
      demo: 'https://github.com'
    }

  ]
  return (
    <section id='projects'>
      <h5>Completed Projects</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return(
                <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>
            )
          })
        }

       
       </div>
    </section>
  )
}

export default Projects