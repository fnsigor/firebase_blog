import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAuthentication } from '../../hooks/useAuthentication'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const Content = styled.div`


    text-align: center;

    p{
        color: #aaa;
    }


`

const Register = () => {

    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const { createUser, error: authError, loading } = useAuthentication()

    const handleSubmit = async (e) => {

        e.preventDefault()

        setError('')

        const user = {
            displayName,
            email,
            password
        }


        if (password !== confirmPassword) {
            setError('As senhas precisam ser iguais!')
            return;
        }

        const response = await createUser(user)

        console.log(response)

    }

    useEffect(() => {
        if (authError) {
            setError(authError)
        }
    }, [authError])

    const { user } = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [])

    return (
        <Content>
            <div className="register">
                <h1>Cadastre-se para postar</h1>
                <p>Crie seu usuário e compartilhe suas histórias</p>
            </div>

            <form onSubmit={handleSubmit}>

                <label htmlFor="displayName">
                    <span>Nome: </span>
                    <input
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        type="text"
                        name="displayName"
                        id='displayName'
                        required
                        placeholder="Nome do usuário" />
                </label>

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

                <label htmlFor="ConfirmPassword">
                    <span>Confirmação de senha: </span>
                    <input
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type="password"
                        name="ConfirmPassword"
                        id='ConfirmPassword'
                        required
                        placeholder="Confirme sua senha" />
                </label>

                {!loading && <button className="btn">Cadastrar</button>}

                {loading && <button className="btn" disabled>Aguarde...</button>}

                {error && <p className="error">{error}</p>}



            </form>
        </Content>
    )
}

export default Register