import React from 'react';
import ProjectList from './ProjectList';
import '../Styles/Projects.css';
import imgVer from '../assets/ver2.png';

export default function Projects() {
  return (
    <section id='section-projects'>
      <div className='content-about'>
        <div className='content-sobreMi'>
            <h2>PROYECTOS</h2>
          </div>
        <div className='content-span'>
            <span className='line large'></span>
            <span className='line small'></span>
        </div>
      </div>
      <div className='content-card'>
        {
          ProjectList.map((project, index) =>
            <div key={index} className='card'>
              <img src={ project.image } alt={project.title} className='project-img'/>
              <div className='content-info1'>
                <div className='info'>
                  <h3>{project.title}</h3>
                  {/* <p>{project.description}</p> */}
                  <a href={ project.link }>
                    <img src={ imgVer } alt="" />
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
