import React, { useState } from 'react';
import ProjectList from './ProjectList';
import '../Styles/Projects.css';
import imgVer from '../assets/ver.png';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const toggleInfo = (index) =>{
    // setActiveProject(prevIndex => (prevIndex === index ? null : index));
    setActiveProject(activeProject === index ? null : index);
  }

  return (
    <section id='section-projects'>
      <div className='content-about'>
        <div className='content-sobreMi'>
            <h2>PROYECTOS</h2>
            <div className='content-span'>
              <span className='line large'></span>
              <span className='line small'></span>
            </div>
        </div>
      </div>
      <div className='content-card'>
        {
          ProjectList.map((project, index) =>
            <div 
              key={index} 
              className='card'
              onClick={() => toggleInfo(index)}
            >
              <img src={ project.image } alt={project.title} className='project-img'/>
              <div className={`content-info1 ${activeProject === index ? 'content-info1-active': ''}`}>
                <div className='info'>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} aria-label={`Ver más de ${project.title}`}>
                  <img src={imgVer} alt={`Vista previa de ${project.title}`} />
                </a>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </section>
  )
}
