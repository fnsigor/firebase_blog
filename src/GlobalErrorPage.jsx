import React from 'react'
import Navbar from './components/Navbar'
import styled from 'styled-components'
import { Link } from 'react-router-dom'



const Content = styled.div`

  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1{
    font-weight: bold;
  }

`


function GlobalErrorPage() {
  return (
    <Content>
       <h1>404</h1>
       <p>Página não encontrada</p>
       <Link className='btn btn-outline' to='/'>Home</Link>
    </Content>
  )
}

export default GlobalErrorPage