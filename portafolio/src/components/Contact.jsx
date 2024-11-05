import React from 'react';
import '../Styles/Contact.css';
import enviar from '../assets/enviar.png';

export default function Contact() {
  return (
    <section id='section-contact'>
      <div className='content-about'>
        <div className='content-sobreMi'>
            <h2>CONTACTAME</h2>
          </div>
        <div className='content-span'>
            <span className='line large'></span>
            <span className='line small'></span>
        </div>
      </div>
      <div className='content-contact'>
        <div className='content-form'>
          <form>
            <input className='nombre' type='text' placeholder='Nombre' required/>
            <input className='correo' type='email' placeholder='Correo electrónico' required/>
            <textarea className='mensaje' placeholder='Escribe tu mensaje' required rows={15}></textarea>
            <div className='wrapper-btn'>
              <button className='btn' type='submit'>
                <span>ENVIAR</span>
                <img src={enviar} alt="" />
                </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
