import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation , NavLink } from 'react-router-dom'
import { useAuthentication } from '../hooks/useAuthentication';
import { useAuthValue } from '../context/AuthContext';


function MobileMenu() {

    const location = useLocation();


    const [menuText, setMenuText] = useState('Home')

    useEffect(()=>{
        if (location.pathname.includes('posts/create')){
            setMenuText('Novo post')
        } else if(location.pathname.includes('dashboard')){
            setMenuText('Dashboard')

        } else if(location.pathname.includes('about')){
            setMenuText('Sobre')
        } else if(location.pathname.includes('login')){
            setMenuText('Entrar')
        } else if(location.pathname.includes('register')){
            setMenuText('Cadastrar')
        } else {
            setMenuText('Home')
        }
    },[location])



    const { logout } = useAuthentication();
    const { user } = useAuthValue();

    return (
        <div className="mobileMenu">
            <div className="dropdown">
                <button className="mobileMenuButton btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {menuText}
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <NavLink to="/" className="dropdown-item"
                         
                        >Home</NavLink>
                    </li>
                    {!user && (
                        <>
                            <li>
                                <NavLink to="/login" className="dropdown-item" onClick={(e) => setMenuText(e.target.textContent)}> Entrar </NavLink>
                            </li>
                            <li>
                                <NavLink to="/register" className="dropdown-item" onClick={(e) => setMenuText(e.target.textContent)}> Cadastrar </NavLink>
                            </li>
                        </>
                    )}
                    {user && (
                        <>
                            <li>
                                <NavLink to="/posts/create" className="dropdown-item"  >Novo post </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard" className="dropdown-item" > Dashboard </NavLink>
                            </li>
                        </>
                    )}
                    <li>
                        <NavLink to="/about" className="dropdown-item" >Sobre </NavLink>
                    </li>
                    {user && (
                        <li>
                            <button className="dropdown-item" onClick={logout}>Sair</button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default MobileMenu