import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type UserProviderProps = {
  children: ReactNode; // Declaramos que children es de tipo ReactNode
};

const UserContext = createContext<any>(null);

export const UserProvider : React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [cargando, setCargando] = useState<boolean>(true);

  const obtenerUsuarioDesdeBD = async () => {
    try{
      const respuesta = await fetch('http://localhost/ProyectoEnRact/backend/api/datos.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre: 'nombre',
          contrasena: 'contrasena'
        })
      });

      const datos = await respuesta.json();
      // console.log('Datos obtenidos desde la API:', datos); 

      if(datos.success) {
        console.log('Usuario actualizado en el contexto:', datos.usuario.nombre);
        setUser(datos.usuario.nombre);
      }

      setUser(datos.nombre);
    }catch(error){
      console.error('Error al obtner el usuario: ', error);
    }finally{
      setCargando(false);
    }
  }
  
  useEffect(() => {
    obtenerUsuarioDesdeBD();
  }, []);
  
  return(
    <UserContext.Provider value={{ user, setUser, cargando }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext);


