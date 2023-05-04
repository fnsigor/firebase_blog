import React from 'react'
import styled from 'styled-components'

const Content = styled.footer`
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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