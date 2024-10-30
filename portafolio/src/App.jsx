import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/about';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './Styles/App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='main-content'>
          <main >
              <Routes>
                <Route  path='/' element={ <About/> }/>
                <Route  path='/projects' element={ <Projects/> }/>
                <Route  path='/skills' element={ <Skills/> }/>
                <Route  path='/contact' element={ <Contact/> }/>
              </Routes>
            </main>
        </div>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
