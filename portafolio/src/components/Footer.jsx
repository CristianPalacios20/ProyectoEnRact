import React from 'react'
import '../Styles/Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <p>&copy; { new Date().getFullYear() } Mi portafolio. Todos los derechos reservados.</p>
      <a href="">GitHub</a>
    </footer>
  )
}
