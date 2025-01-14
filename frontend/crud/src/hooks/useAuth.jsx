import React, {useEffect, useState} from 'react'
import axios from 'axios';

function useAuth() {
    const [user, setUser] = useState([]); // Estado para almacenar los datos
    const [loading, setLoading] = useState(true); // Estado para manejar la carga de la solicitud
    const [error, setError] = useState(null); // Estado para manejar errores

    const useAuth = async () => {
        setLoading(true); // comienza la carga
        setError(null); // limpia errores

        try{
            const response = await axios.post('http://localhost/ProyectoEnRact/backend/api/datos.php', {
                nombre,
                password
            });

            if(response.data.success){
                setUser(response.data.data); // almacena los datos del usaurio si el inicio de sesión fue exitoso
                return { success : true, user : response.data.user };
            }else{
                setError(response.data.message); // muestra el mensaje de error si las credenciales son incorrectas
                return { success : false, message : response.data.message };
            }

        }catch(err){
            setError('Error en la solicitud'); // En caso de que haya un error en al conexión o cualquier otro error
            return { success : false, message : 'Error en la solicitud' };
        }finally{
            setLoading(false); // finaliza la carga
        }
    };

  return { user, loading, error };
}

export default useAuth;
