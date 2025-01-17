import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

function useLogin() {
    const navigate = useNavigate();
    const { Auth: login, loading, error } = useAuth(); // desestructuramos useAuth
    const [nombre, setNombre] = useState('');
    const [ contrasena, setContrasena ] = useState('');

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log('Formulario enviado');  

        const result =  await login(nombre, contrasena);
        if(result.success){
            // Redireccionar a la página principal
            navigate('/dashboard');
        }else{
            // Mostrar mensaje de error
            console.log(`Error: ${JSON.stringify(result.message)}`);
        }
    };

    return {
        nombre, 
        setNombre,
        contrasena,
        setContrasena,
        handleLogin,
        loading,
        error,
    }
}

export default useLogin;
