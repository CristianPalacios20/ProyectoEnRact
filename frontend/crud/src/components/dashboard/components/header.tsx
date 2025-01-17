import iconSereach from '../../../assets/icons/Sereach.svg';
import iconUser from '../../../assets/icons/iconUser.svg';
import iconNoti from '../../../assets/icons/iconNoti.svg';
import '../../../styles/header.css';

export default function header() {
  return (
    <>
      <header className='header'>

        <nav className='content-nav'>
          {/* <h2>jklblbjlk.</h2> */}
          <ul>
            <li className='content-buscador'>
              <input type="text" placeholder='Sereach'/>
              <img src={ iconSereach } alt="" />
            </li>
            <li><img src={iconNoti} alt="" /></li>
            <li><img src={ iconUser } alt="" /></li>
            <li></li>
          </ul>
        </nav>
      </header>
    </>
  )
}
