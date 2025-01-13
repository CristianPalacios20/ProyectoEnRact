import { useState } from 'react';
import '../styles/nn.css';

export default function AlternarContenedoresConTransicion() {
  const [mostrarPrimero, setMostrarPrimero] = useState(true); // Estado para alternar contenedores

  return (
    <div>
      <h1>Alternar entre dos contenedores con transición</h1>

      {/* Botón para mostrar el primer contenedor */}
      <button onClick={() => setMostrarPrimero(true)}>Mostrar Contenedor 1</button>

      {/* Botón para mostrar el segundo contenedor */}
      <button onClick={() => setMostrarPrimero(false)}>Mostrar Contenedor 2</button>

      <div className="contenedores">
        {/* Contenedor 1 */}
        <div
          className={`contenedor contenedor-1 ${
            mostrarPrimero ? 'visible' : 'oculto'
          }`}
        >
          <h2>Este es el Contenedor 1</h2>
          <p>¡Hola desde el primer contenedor!</p>
        </div>

        {/* Contenedor 2 */}
        <div
          className={`contenedor contenedor-2 ${
            !mostrarPrimero ? 'visible' : 'oculto'
          }`}
        >
          <h2>Este es el Contenedor 2</h2>
          <p>¡Hola desde el segundo contenedor!</p>
        </div>
      </div>
    </div>
  );
}


