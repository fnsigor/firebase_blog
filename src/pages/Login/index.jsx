import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext, useAuthValue } from '../../context/AuthContext';
import styled from 'styled-components';
import { useAuthentication } from '../../hooks/useAuthentication'



const Content = styled.div`


    text-align: center;

    p{
        color: #aaa;
    }


`


function Login() {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState('')

    const { login, error: authError, loading } = useAuthentication()

    const handleSubmit = async (e) => {

        e.preventDefault()

        setError('')

        const user = {
            email,
            password
        }


        const response = await login(user)

        console.log(response)

    }

    useEffect(() => {
        if (authError) {
            setError(authError)
        }
    }, [authError])

    const { user } = useAuthValue()
    const navigate = useNavigate();


    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [])

    return (
        <Content>

            <div className="register">
                <h1>Entrar</h1>
                <p>Faça o login para utilizar o sistema</p>
            </div>

            <form onSubmit={handleSubmit}>

                <label htmlFor="email">
                    <span>E-mail: </span>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="email"
                        id='email'
                        required
                        placeholder="E-mail do usuário" />
                </label>

                <label htmlFor="password">
                    <span>Senha: </span>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        id='password'
                        required
                        placeholder="Insira sua usuário" />
                </label>



                {!loading && <button className="btn">Entrar</button>}

                {loading && <button className="btn" disabled>Aguarde...</button>}

                {error && <p className="error">{error}</p>}

            </form>
        </Content>
    )
}

export default Login