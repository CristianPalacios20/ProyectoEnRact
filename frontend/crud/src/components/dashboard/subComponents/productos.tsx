import { useEffect, useState } from "react"
import '../../../styles/productos.css'
import editar from '../../../assets/icons/editar.svg';
import eliminar from '../../../assets/icons/iconEliminar.svg'


interface Productos{
  id: number;
  nombre_producto: string;
  categoria: string;
  marca: string;
  precio: number;
  cantidad: number;
  estado_id: string;
  imagen: string;
  fecha_creacion: string;
}

export default function Productos() {
  const [productos, setProductos] = useState<Productos[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Obtener los productos al cargar la página
  useEffect(() => {
    setTimeout(() => {
      obtenerProductos();
      setIsLoading(false);
    }, 3000);
  }, []);

  const obtenerProductos = () => {
    fetch("http://localhost/ProyectoEnRact/backend/api/productos.php")
    .then((response) => response.json())
    .then((data : Productos[]) => setProductos(data))
    .catch((error) => console.error("Error al obtener productos", error));
  }

  const eliminarProducto = (id: number) => {
    if(window.confirm("Estás seguro de eliminar este producto?")) {
      const productoId = Number(id);
      fetch(`http://localhost/ProyectoEnRact/backend/api/eliminarProd.php`, {
        method: 'DELETE',

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id : productoId }),
      })
        .then((response) => response.json())
        .then((data) => {
            if(data.success){
              alert("Producto eliminado correctamente!");
              obtenerProductos();
            }else{
              alert("Error al eliminar el producto.");
            }
     })
      .catch((error) => console.error("Error al eliminar el productooo", error));
    }
  }

  // Renderizar los productos aquí...
  return (
    <div className="table-container">
      <div className="product-actions">
        <h2>Listado de Productos</h2>
        <button>Agregar Producto</button>  {/* Botón para agregar productos */}
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>PRODUCTO</th>
            <th>CATEGORÍA</th>
            <th>MARCA</th>
            <th>PRECIO</th>
            <th>CANTIDAD</th>
            <th>ESTADO</th>
            <th>IMAGEN</th>
            <th>FECHA DE CREACIÓN</th>
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {/* Aquí se renderizarán los datos de los productos */}
          { isLoading ? (
            <tr>
              <td colSpan={10}>Cargando productos...</td>
            </tr>
          ) : productos.length > 0 ?(
              productos.map((producto) => (
                <tr key={producto.id}>
                  <td>{producto.id}</td>
                  <td>{producto.nombre_producto}</td>
                  <td>{producto.categoria}</td>
                  <td>{producto.marca}</td>
                  <td>{producto.precio}</td>
                  <td>{producto.cantidad}</td>
                  <td>{producto.estado_id}</td>
                  <td><img src={`${producto.imagen}`} /></td>
                  <td>{producto.fecha_creacion ? new Date(producto.fecha_creacion).toLocaleDateString() : "Fecha desconocida"}</td>
                  <td className="content-button">
                    <button className="editar"><img src={ editar }/></button>
                    <button className="eliminar"><img src={ eliminar } onClick={() => eliminarProducto(producto.id)}  /></button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={9}>No hay productos registrados</td>
              </tr>
            )}
        </tbody>
      </table>
    </div>
  )
}
