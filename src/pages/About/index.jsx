import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Content = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;


    p{
        width: 100%;
        text-align: start;
        max-width: 800px;  
        a{

            font-size:2rem;
            color: #009;
            font-style: italic;
        }
    }
    
    

    @media (max-width: 706px) {
      p  a{
            font-size:1.8rem
        }
      
    }
`


function About() {
    return (
        <Content>
            <h1>Sobre o Mini <span>Blog</span></h1>
            <p>
                O miniblog é um projeto do curso <a href="https://www.udemy.com/course/react-do-zero-a-maestria-c-hooks-router-api-projetos/" target='_blank'>Hora de Codar</a>.
                <br /> <br />
                Cadastre-se para fazer suas publicações e ter acesso completo aos posts dos outros usuários. 
                <br />  <br /> O Back-end da aplicação fica por conta do Firebase, que também permite realizar a autenticação dos usuários no momento do login; projeto feito com React.js
            </p>
            <Link to='/posts/create' className='btn'>Criar post</Link>
        </Content>
    )
}

export default About