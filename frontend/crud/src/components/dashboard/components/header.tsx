import iconSereach from '../../../assets/icons/Sereach.svg';
import iconUser from '../../../assets/image2.png';
import iconFlechaAbajo from '../../../assets/icons/FlechaAbajo.svg';
import iconNoti from '../../../assets/icons/iconNoti.svg';
import '../../../styles/header.css';

export default function header() {
  return (
    <>
      <header className='header'>
        <div className='contetTitle'>
          <h2>Dashboard MPFW_CSPP.</h2>
        </div>
        <nav className='content-nav'>
          <ul>
            <li className='content-buscador'>
              <input type="text" placeholder='Sereach'/>
              <img src={ iconSereach } alt="" />
            </li>
            <li className='contentNofi'>
              <img src={iconNoti} alt="" />
            </li>
            <li className='content-user'>
                <span>
                  <img src={ iconUser } alt="" />
                  <p>USERNAME</p>
                  <img className='iconFlechaAbajo' src= { iconFlechaAbajo } alt="" />
                </span>
            </li>
            <li>

            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
