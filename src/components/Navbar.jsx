import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useAuthValue } from '../context/AuthContext'
import { useAuthentication } from '../hooks/useAuthentication'


const Nav = styled.nav`
    display: flex;
    box-shadow: rgba(0,0,0, .15) 0 -2px 10px 5px;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 4rem;
    margin-bottom: 4rem;

.brand{
    font-size:2rem;

    span{
        font-weight: 900;
        text-transform: uppercase;
    }
}

ul{
    display: flex;
    align-items: center;
    list-style: none;

    li{
        margin-right: 1rem;
    }

    a, button{
        padding:  .8rem 1.4rem;
        font-size: 1.6rem;
        transition: all.3s;
        border-radius: 5px;
        background-color: none;
        background-color: #f6fcff;

        :hover{
            background-color: #000000;
            color: #fff;
            cursor: pointer;
        }
    }
}

    .mobileMenu{
        display: none;
    }

@media (max-width: 700px) {
    .mobileMenu{
    display: initial;
    }

    ul{
        display: none;
    }
}

`

const Navbar = () => {
    const { logout } = useAuthentication();
    const { user } = useAuthValue();

    return (
        <Nav>
            <Link to="/" className="brand">
                Mini<span>Blog</span>
            </Link>
            <div className="mobileMenu">
                menu
            </div>
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
