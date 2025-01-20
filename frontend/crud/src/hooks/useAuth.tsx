import { useState} from 'react'
import axios from 'axios';

interface User{
    id : number;
    nombre : string;
    contrasena : string;
}

function useAuth() {
    const [user, setUser] = useState <User | null> (null); // Estado para almacenar los datos
    const [loading, setLoading] = useState <boolean> (false); // Estado para manejar la carga de la solicitud
    const [error, setError] = useState <string | null> (null); // Estado para manejar errores

    const Auth = async (nombre: string, contrasena: string) : Promise <{ success : boolean; user ? : User; message ? : string }> => {
        setLoading(true); // comienza la carga
        setError(null); // limpia errores

        try{
            const response = await axios.post('http://localhost/ProyectoEnRact/backend/api/datos.php', {
                nombre,
                contrasena
            });

            // console.log(response.data);  // Esto te permitirá ver la respuesta completa de la API

            if(response.data.success){
                setUser(response.data.User); // almacena los datos del usaurio si el inicio de sesión fue exitoso
                return { success : true, user : response.data.user };
            }else{
                setError(response.data.message); // muestra el mensaje de error si las credenciales son incorrectas
                setTimeout(() =>{
                    setError(''); // limpia el error después de 3 segundos
                }, 3000)
                return { success : false, message : response.data.message };
            }

        }catch(err){
            setError('Error en la solicitud'); // En caso de que haya un error en al conexión o cualquier otro error
            return { success : false, message : 'Error en la solicitud' };
        }finally{
            setLoading(false); // finaliza la carga
        }
    };

  return { user, Auth, loading, error };
}

export default useAuth;
