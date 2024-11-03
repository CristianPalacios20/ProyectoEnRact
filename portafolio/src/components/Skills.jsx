import React from 'react';
import '../Styles/Skills.css';
import SkillBar from './SkillBar';

export default function Skills() {
  return (
    <section id='section-skills'>
      <div className='content-about'>
        <div className='content-sobreMi'>
            <h2>SKILLS</h2>
          </div>
        <div className='content-span'>
            <span className='line large'></span>
            <span className='line small'></span>
        </div>
      </div>
      <div className='content-skills'>
        < SkillBar skillName="HTMML/CSS" percentage={90}/>
        < SkillBar skillName="JAVASCRIPS" percentage={70}/>
        < SkillBar skillName="PHP" percentage={60}/>
        < SkillBar skillName="REACT" percentage={80}/>
        < SkillBar skillName="JAVA" percentage={80}/>
        < SkillBar skillName="MYSQL" percentage={90}/>
      </div>
    </section>
  )
}
