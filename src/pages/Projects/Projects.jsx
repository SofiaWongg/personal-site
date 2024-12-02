import React from 'react';
import './projects.css';
import IMG1 from '../../assets/assets/covidDashImg.png';
import IMG2 from '../../assets/assets/pickupScreenshots.png';
import IMG3 from '../../assets/assets/xl-project.png';
import IMG4 from '../../assets/assets/hatched.png';

const Projects = () => {
  const data = [
    {
      id: 2,
      image: IMG2,
      title: 'Pick Up Sports App',
      github: 'https://github.com/SofiaWongg/iOS_pickup',
      demo: 'https://github.com/SofiaWongg/iOS_pickup',
    },
    {
      id: 4,
      image: IMG4,
      title: 'Hatched Dating',
      download: 'https://www.hatcheddating.com',
    },
    {
      id: 3,
      image: IMG3,
      title: 'XL Forum Page',
      github: 'https://github.com/comp423-23s/final-project-c9',
      demo: 'https://csxl.unc.edu/organizations',
    },
    {
      id: 1,
      image: IMG1,
      title: 'Covid Dashboard',
      github: 'https://github.com/comp426-2022-spring/a99-petra',
      demo: 'https://a99-petra.vercel.app/dashboard',
    },
  ];

  return (
    <section id="projects">
      <h5>Completed Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, download }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              {github && (
                <a href={github} className="btn" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
              {demo && (
                <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
              {download && (
                <a href={download} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Download App!
                </a>
              )}

            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
