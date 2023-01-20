import React, { useState } from 'react';

const LoginFForm = () => {

    //UseState hook para conter São os dados de senhas e informações dos usuários
    const [LoginF, setLoginF] = useState({});



    const handleSubmit = (e) => {
        e.preventDefault();
        setLoginF({
            nome: e.target.nome.value,
            email: e.target.email.value,
            password: e.target.password.value
        })
        console.log(LoginF)
    };

    const AxiosPost = (e) => {
        e.preventDefault();
        fetch('https://crudserver2.onrender.com/pratos', {
            method: 'POST',
            body: JSON.stringify(LoginF),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
    }


    const handleFormSubmit = (e) => {
        handleSubmit(e);
        AxiosPost(e);
    }


    return (
        <form onSubmit={handleFormSubmit}>
            <label>
                Email:
                <input type="email" name="email" />
            </label>
            <label>
                Nome:
                <input type="text" name="nome" />
            </label>
            <label>
                Senha:
                <input type="password" name="password" />
            </label>
            <button type="submit">ENVIE</button>
        </form>
    );
};

export default LoginFForm;