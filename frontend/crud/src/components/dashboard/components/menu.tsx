import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate} from 'react-router-dom';
import '../../../styles/menu.css';
import image from '../../../assets/image2.png'
import iconUser from '../../../assets/icons/iconUser1.svg';
import iconDashboard from '../../../assets/icons/iconDashboard.svg';
import iconProductos from '../../../assets/icons/iconProducts.svg';
import iconSetting from '../../../assets/icons/iconSetting.svg';
import iconLogout from '../../../assets/icons/iconLogout.svg';

export default function Menu() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(
    false // Inicializa el estado como no autenticado
  );

  // Verifica la autenticación cada vez que el componente se recargue
  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false); // Si hay token, marca como autenticado
      navigate('/', { replace : true });
    }
  }, [navigate]); // Reejecuta cada vez que `navigate` cambie

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    Cookies.remove('userSession');
    setIsAuthenticated(false); // Actualiza el estado para reflejar que no está autenticado

    //redirigir a la página de inicio y borra el historial
    navigate('/', { replace : true }); // Redirige al login después de cerrar sesión
    window.location.reload();
  };

  return (
    <>
      { isAuthenticated ? (
            <div className='menu'>
              <div className='content-logo'>
                <div>
                  <img src={ image } alt="" />
                </div>
              </div>
              {/* <div className='content-user'>
                <div>
                  <img src={ image } alt="" />
                  <span>CRISTIAN M.</span>
                </div>
              </div> */}
              <div className='content-menu'>
                <ul>
                  <li>
                    <img src= { iconDashboard } alt="" />
                    <a href="">Dashboard</a>
                  </li>
                  <li>
                    <img src= { iconUser } alt="" />
                    <a href="">Usuarios</a>
                  </li>
                  <li>
                    <img src= { iconProductos } alt="" />
                    <a href="">Productos</a>
                  </li>
                  <li>
                    <img src= { iconSetting } alt="" />
                    <a href="">Configuración </a>
                  </li>
                </ul>
              </div>
              <div className='content-logout'>
                <ul>
                  <li>
                    <img src= { iconLogout } onClick={ handleLogout } />
                    <button onClick={ handleLogout }>Cerrar sesión</button>
                  </li>
                </ul>
              </div>
            </div>
      ) : (
        <div className='content-loading'>
          <h1>Redirigiendo...</h1>
        </div>
      ) }
    </>
  )
}
