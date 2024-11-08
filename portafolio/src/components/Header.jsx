import React from 'react';
import '../Styles/Header.css';
import ScrollEffect from './effects/ScrollEffect';

export default function Header() {
  return (
    <header className='header'>
      <h1>MI PORTAFOLIO</h1>
      <ScrollEffect targetClass='header' />
      <nav className='nav-links'>
        <ul>
          <li className='nav-link'><a href="#home">INICIO</a></li>
          <li className='nav-link'><a href="#about">SOBRE MÍ</a></li>
          <li className='nav-link'><a href="#section-skills">HABILIDADES</a></li>
          <li className='nav-link'><a href="#section-projects">PROYECTOS</a></li>
          <li className='nav-link'><a href="#section-contact">CONTÁCTAME</a></li>
        </ul>
      </nav>
    </header>
  )
}
