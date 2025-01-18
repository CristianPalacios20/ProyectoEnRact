import { useState } from 'react';
import '../styles/nn.css';

export default function AlternarContenedoresConTransicion() {
  const [mostrarPrimero, setMostrarPrimero] = useState(true); // Estado para alternar contenedores

  return (
    <>
      <div className="sidebar">
      </div>
      <div className="content">
      </div>
    </>
  );
}


