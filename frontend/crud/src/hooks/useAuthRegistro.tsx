import { useState } from 'react'
import axios from 'axios';

export default function useAuthRegistro() {

    const [registroNombre, setRegistroNombre] = useState('');
    const [registroContrasena, setRegistroContrasena] = useState('');
    const [registroCorreo, setRegistroCorreo] = useState('');
    const [registroMensaje, setRegistroMensaje] = useState('');
    const [registroLoading, setRegistroLoading] = useState(false);

    const handleRegistro = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setRegistroLoading(true); // Comienza la carga
        // Enviar datos al backend para registrar un nuevo usuario
        try{
            const response = await axios.post('http://localhost/ProyectoEnRact/backend/api/registro.php', {
                nombre : registroNombre,
                contrasena :  registroContrasena,
                correo : registroCorreo
            });

            if (response.data.success) {
                setRegistroMensaje(response.data.message);
                setRegistroNombre('');
                setRegistroCorreo('');
                setRegistroContrasena('');
                
                setTimeout(() => {
                    setRegistroMensaje('');
                }, 3000);

            } else {
                setRegistroMensaje(response.data.message);
            }
        }catch(error){
            console.error( 'Error en el registro: ', error);
            setRegistroMensaje('Hubo un error en el registro');
        }finally{
            setRegistroLoading(false); // Finaliza la carga
        }
    }
  return { 
    registroNombre,
    setRegistroNombre,
    registroContrasena,
    setRegistroContrasena,
    registroCorreo,
    setRegistroCorreo,
    registroMensaje,
    handleRegistro,
    registroLoading,
    }
}
