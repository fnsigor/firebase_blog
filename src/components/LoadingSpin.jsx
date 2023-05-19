import React from 'react'
import styled from 'styled-components'



const Content = styled.div`

width: 100%;

    .spinner{
        height: 15px;
        width: 15px;
        border: 3px solid #000;
    }

`


function LoadingSpin() {
  return (
    <Content>
        <div className="spinner">aa</div>
    </Content>
  )
}

export default LoadingSpin