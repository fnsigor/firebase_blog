import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Content = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;


    p{
        color: #aaa;
        margin-bottom: 2em;
    }


    a{
        display: block;
        margin-top: 15px;
        padding: 10px 15px;
    }
`


function About() {
    return (
        <Content>
            <h2>Sobre o Mini <span>Blog</span></h2>
            <p>esse projeto consiste em um blog feito com React no Front-end e Firebase no back-end</p>
            <Link to='/posts/create' className='btn'>Criar post</Link>
        </Content>
    )
}

export default About