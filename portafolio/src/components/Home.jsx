import React from 'react';
import '../Styles/Home.css';

export default function Home() {
  return (
    <section id='home'>
        <div className='content-descrip'>
            <div className='content-info'>
                <h1>CRISTIAN PALACIOS</h1>
                <p>Desarrollador web Junior</p>
            </div>
            <div className='conten-buttons'>
                <button className='btn-contratame'>HERE ME</button>
                <button className='explorarMas'>EXPLORE MORE</button>
            </div>
        </div>
        <div className='content-img'>
            <img src="" alt="" />
        </div>
    </section>
  )
}
