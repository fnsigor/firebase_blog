

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Tag from './Tag'

const Content = styled.div`
    
  margin-bottom: 10rem;

  border-radius: 5px;

  width: 600px;


  .userData{

    margin-bottom: 1rem;

    *{
      word-break: break-all;
    }

    .createdBy, .userId{
    color: #444;
    }

    .createdBy {
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
    }

    .userId{
      font-style: italic;
      font-size: 1.2rem;
    }
  } 


  img {
    border-radius: 5px;
    margin-bottom: .5rem;
    width: 100%;
    object-fit: cover;
    
    max-height : 75rem;
    min-height: 25rem;
  }

  h2 {
    margin-bottom: 0.8rem;
    font-size: 2.4rem;
    line-height: 2.2rem;
  }
  
.post-body{
  font-size: 1.6rem;
  margin-bottom:.5rem;
}

.verMais{
  color: #444;
  font-weight: bold;
  font-size: 1.4rem;

  :hover{
    color: #888;
  }
}

.tags {
  margin-bottom: 1.2rem;
  display: flex;
}

.tags p {
  margin-right: 0.5rem;
  font-size: 1.4rem;
}

.tags span {
  font-weight: bold;
}

`

function PostDetails({ post }) {

  const [hasImage, setHasImage] = useState(true)

  const words = post.body.split(' ')

  const bodyHasMoreThan200Words = words.length > 200

  return (
    <Content>


      <h2>{post.title}</h2>
      <div className="userData">
        <p className="createdBy">{post.createdBy} - #{Array.from(post.uid).splice(20)}</p>
      </div>

      {hasImage && (
        <Link to={`/posts/${post.id}`} className="img-link">
          <img
            onError={() => setHasImage(false)}
            src={post.image} alt={post.title} />
        </Link>
      )}

      {bodyHasMoreThan200Words
        ? (<p className='post-body'>
          {words.splice(0,30).join(' ')}...   <Link className='verMais' to={`/posts/${post.id}`} >Ver mais</Link>
        </p>)
        : (<p className='post-body'>{post.body}</p>)
      }

      <ul className="tags">
        {post.tags.map((tag) => (
          <Tag key={tag} tagName={tag} />
        ))}
      </ul>

    </Content>
  )
}

export default PostDetails