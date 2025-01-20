import { Routes, Route } from 'react-router-dom';
import DashboardPage from '../subComponents/dashboardPage';
import UsuariosPage from '../subComponents/usuarios';
import ProductosPage from '../subComponents/productos';
import ConfiguracionPage from '../subComponents/configuracion';
import '../../../styles/main.css'
export default function main() {
  return (
      <div className='main'>
        <Routes>
          <Route path='/' element = { <DashboardPage /> }/>
          <Route path='/usuarios' element = { < UsuariosPage /> }/>
          <Route path='/productos' element = { < ProductosPage /> }/>
          <Route path='/configuracion' element = { < ConfiguracionPage /> }/>
        </Routes>
      </div>
  )
}
