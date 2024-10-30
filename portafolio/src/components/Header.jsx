import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';

export default function Header() {
  return (
    <header className='header'>
      <h1>MI PORTAFOLIO</h1>
      <nav className='nav-links'>
        <Link className='nav-link' to={"/"}>SOBRE MÍ</Link>
        <Link className='nav-link' to={"/projects"}>PROYECTOS</Link>
        <Link className='nav-link'to={"/skills"}>HABILIDADES</Link>
        <Link className='nav-link'to={"/contact"}>CONTACTO</Link>
      </nav>
    </header>
  )
}
