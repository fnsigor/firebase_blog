import React from 'react'
import styled from 'styled-components'

const Content = styled.footer`
padding: 2rem 4rem;

    h3{
        font-size: 1.8rem;
        margin-bottom: 1rem;
    }

    p{
        font-size: 1.2rem;
    }

    p, h3{
        text-align: center;
    }
    

    background-color: #edf3f6;
`

function Footer() {
    return (
        <Content>
            <h3>Escreva sobre o que você tem interesse! </h3>
            <p>Mini Blog &copy; 2023 </p>
        </Content>
    )
}

export default Footer