import React, { useState } from 'react';
import useAuth from './useAuth';

function useLogin() {
    const { login, user, loading, error } = useAuth();
    const {nombre, setNombre} = useState('');
    const {password, setPassword} = useState('');

    const handleLogin = async (e) => {
        e.preventDeafault();
        const result = await login(nombre, password);
        if(result.success){
            // Redireccionar a la página principal
            alert('Usuario autenticado: ', result.user);
        }else{
            // Mostrar mensaje de error
            alert('Error: ', result.message);
        }
    };

    return {
        nombre, 
        setNombre,
        password,
        setPassword,
        handleLogin,
        loading,
        error,
    }
}

export default useLogin;
