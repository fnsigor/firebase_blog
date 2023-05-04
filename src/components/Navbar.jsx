import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useAuthValue } from '../context/AuthContext'
import { useAuthentication } from '../hooks/useAuthentication'


const Nav = styled.nav`
display: flex;
box-shadow: rgba(0,0,0, .15) 0 -2px 10px 0px;
justify-content: space-between;
align-items: center;
padding: .5rem 2rem;

.brand{
    font-size:1.2em;

    span{
        font-weight: 900;
        text-transform: uppercase;
    }
}

ul{
    display: flex;
    list-style: none;

    li{
        margin-right: 1rem;

        a{
            padding:  .4em .6em;
        }
    }
}

`

const Navbar = () => {
    const { logout } = useAuthentication();
    const { user } = useAuthValue();

    return (
        <Nav>
            <Link to="/">
                Mini <span>Blog</span>
            </Link>
            <ul >
                <li>
                    <NavLink
                        to="/"

                    >
                        Home
                    </NavLink>
                </li>
                {!user && (
                    <>
                        <li>
                            <NavLink
                                to="/login"

                            >
                                Entrar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/register"

                            >
                                Cadastrar
                            </NavLink>
                        </li>
                    </>
                )}
                {user && (
                    <>
                        <li>
                            <NavLink
                                to="/posts/create"

                            >
                                Novo post
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard"

                            >
                                Dashboard
                            </NavLink>
                        </li>
                    </>
                )}
                <li>
                    <NavLink
                        to="/about"

                    >
                        Sobre
                    </NavLink>
                </li>
                {user && (
                    <li>
                        <button onClick={logout}>Sair</button>
                    </li>
                )}
            </ul>
        </Nav>
    );
};

export default Navbar;
