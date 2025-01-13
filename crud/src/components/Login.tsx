// import React from 'react'
import facebook from '../assets/facebook.png';
import gmail from '../assets/gmail.png';
import flIzquierda from '../assets/flecha-izquierda.png';
import flDerecha from '../assets/flecha-derecha.png';
import "../styles/Login.css";
import { useState } from 'react';

export default function form() {
  const newLocal = <label className="recordarme"><input type="checkbox" name="" id="checkbox" />Recuérdame</label>;
  const [mostrar, setMostrar] = useState(true);
  return (
    <div className="form-container ">
      {/* Sección para iniciar sesión */}
      {mostrar && (
        <div className= { `form-section ${ mostrar ? 'active' : 'inactive' } ` }>
          <div className="welcome-message">
            <h1>Bienvenido.</h1>
            <p>¿Aún no tienes una cuenta? ¡Únete a nuesta comunidad! </p>
            <div className='primary-button-container'>
              <button 
                className="primary-button"
                onClick={() => setMostrar(false)}
              ><img src={ flIzquierda } alt=""/>Regístrate</button>
                
            </div>
          </div>
          <div className="form-box">
            <h2>Inicia sesión aquí</h2>
            <form className="login-form" onSubmit={(e) => e.preventDefault()}>
                <input type="text" 
                    placeholder="Enter your email"
                    className="input-field"
                />
                <input 
                  type="password" 
                  placeholder="Enter your password"
                  className="input-field"
                />
                <div className="outh-options">
                  {newLocal /* Checkbox para recordar usuario */}
                  <p>¿Olvidaste tu contraseña?</p>
                </div>
                <div className="button-container">
                  <button type="submit" className="secondary-button">Iniciar sesión</button>
                </div>
                <div className='social-buttons-container'>
                    <span>O usa tu cuenta</span>
                    <div className="social-buttons">
                      <button className="social-button"><img src={gmail} alt="Google" /></button>
                      <button className="social-button"><img src={facebook} alt='Facebook'></img></button>
                    </div>
                </div>
              </form>
          </div>
        </div>
      )}
      {!mostrar && (
        <div className={ `form-section ${ !mostrar ? 'active' : 'inactive' } ` }>
          {/* Sección para registrarse */}
          <div className="form-box">
            <h2>Regístrate aquí</h2>
              <form className="register-form" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" 
                      placeholder="Enter your name"
                      className="input-field"
                  />
                  <input type="email" 
                      placeholder="Enter your email"
                      className="input-field"
                  />
                  <input 
                    type="password" 
                    placeholder="Enter your password"
                    className="input-field"
                  />
                  <div className="button-container">
                    <button type="submit" className="secondary-button">Registrarse</button>
                  </div>
                  <div className='social-buttons-container'>
                    <span>O usa tu cuenta</span>
                    <div className="social-buttons">
                      <button className="social-button"><img src={gmail} alt="Google" /></button>
                      <button className="social-button"><img src={facebook} alt='Facebook'></img></button>
                    </div>
                  </div>
              </form>
          </div>
          <div className="welcome-message">
            <h1>Bienvenido.</h1>
            <p>¿Ya tienes una cuenta? Inicia sesión aquí.</p>
            <div className='primary-button-container'>
              <button 
                className="primary-button"
                onClick={() => setMostrar(true)}
              >Iniciar sesión <img src={ flDerecha } alt=""/></button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
