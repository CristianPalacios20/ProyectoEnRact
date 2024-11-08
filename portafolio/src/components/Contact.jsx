import React, {useRef} from 'react';
import emailjs from 'emailjs-com';
import '../Styles/Contact.css';
import enviar from '../assets/enviar.png';

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm()
      .then((result) =>{
        console.log(result);
        alert('Correo enviado correctamente!');
      }, (error) =>{
        console.error(error);
        alert('Hubo un error al enviar el correo, intente nuevamente!.');
      });
  }
  
  return (
    <section id='section-contact'>
      <div className='content-about'>
        <div className='content-sobreMi'>
            <h2>CONTÁCTAME</h2>
          </div>
        <div className='content-span'>
            <span className='line large'></span>
            <span className='line small'></span>
        </div>
      </div>
      <div className='content-contact'>
        <div className='content-form'>
          <form ref={form} onSubmit={ sendEmail }>
            <input 
              className='nombre' 
              type='text' 
              placeholder='Nombre' 
              name='user_name' 
              required/>
            <input 
              className='correo' 
              type='email' 
              placeholder='Correo electrónico' 
              name='user_email' 
              required/>
            <textarea 
              className='mensaje' 
              placeholder='Escribe tu mensaje' 
              name='message' 
              required 
              rows={15}></textarea>
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
