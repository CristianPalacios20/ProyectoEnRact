import React from 'react';
import '../Styles/Skills.css';

export default function Skills() {
  return (
    <section id='skills'>
      <div className='content1'>
        <div className='content-miSkills'>
          <h2>MY SKILLS</h2>
        </div>
        <div className='content-span'>
          <span className='line large'></span>
          <span className='line small'></span>
        </div>
      </div>
      <div className='content-2'>
        <div className='Skill'>
          <span>HTML/CSS</span>
            <div className='progress'>
              <div className='progress-bar' style={{ width: '80%' }}></div>
          </div>
          <span className='percentage'></span>
        </div>
        <div>
          <span>JAVASCRIPTS</span>
          <div className='progress'>
              <div className='progress-bar' style={{ width: '80%' }}></div>
          </div>
          <span className='percentage'></span>
        </div>
        <div>
          <span>PHP</span>
          <div className='progress'>
              <div className='progress-bar' style={{ width: '80%' }}></div>
          </div>
          <span className='percentage'></span>
        </div>
        <div>
          <span>JAVA</span>
          <div className='progress'>
              <div className='progress-bar' style={{ width: '80%' }}></div>
          </div>
          <span className='percentage'></span>
        </div>
        <div>
          <span>MYSQL</span>
          <div className='progress'>
              <div className='progress-bar' style={{ width: '80%' }}></div>
          </div>
          <span className='percentage'></span>
        </div>
        <div>
          <span>REACT</span>
          <div className='progress'>
              <div className='progress-bar' style={{ width: '80%' }}></div>
          </div>
          <span className='percentage'></span>
        </div>
      </div>
    </section>
  )
}
