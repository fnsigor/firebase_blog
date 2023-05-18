import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ListItem = styled.li`
    a{
        font-size: 1.4rem;
        margin-right: .5rem;
        font-weight: bold;
    }


`

function Tag({tagName}) {
  return (
    <ListItem>
          <Link to={`/search?q=${tagName}`}><span>#</span>{tagName}</Link>
    </ListItem>
  )
}

export default Tag