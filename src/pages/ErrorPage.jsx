import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Content = styled.div`

    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
`

function ErrorPage() {
    return (
        <Content>
            <h1>Ops, algo deu errado :c</h1>
        </Content>
    )
}

export default ErrorPage