

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Content = styled.div`
    
  position: relative;
  margin-bottom: 10rem;

  border-radius: 5px;

  width: 600px;


  .userData-img{

    position: absolute;
    top: 3.2rem; 
    left: 1rem;
    z-index: 1;

    *{
      word-break: break-all;
    }

    .createdBy, .userId{
    color: #fff;
    font-weight: bold;
    text-shadow:  0 0 3px #000;
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


  .userData-noimg{

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

  if (hasImage) {
    return <ImagePost setHasImage={setHasImage} post={post} />
  } else {
    return <NoImagePost post={post} />
  }

}



function ImagePost({ setHasImage, post }) {
  return (
    <Content>

      <div className="userData-img">
        <p className="createdBy">{post.createdBy}</p>
        <p className="userId">
          #{Array.from(post.uid).splice(20)}
        </p>
      </div>

      <h2>{post.title}</h2>
      <Link to={`/posts/${post.id}`} className="img-link">
        <img
          onError={() => setHasImage(false)}
          src={post.image} alt={post.title} />
      </Link>
      {post.body && <p className='post-body'>{post.body}</p>}
      <ul className="tags">
        {post.tags.map((tag) => (
          <li key={tag}>
            <p><span>#</span>{tag}</p>
          </li>
        ))}
      </ul>

    </Content>
  )
}


function NoImagePost({ post }) {

  const words = post.body.split(' ')

  const bodyHasMoreThan200Words = words.length > 200


  useEffect(() => {
    console.log('o post ' + post.title + 'tem ' + words.length + 'palavras');
    console.log(words);
  }, [])


  return (
    <Content>


      <h2>{post.title}</h2>
      <div className="userData-noimg">
        <p className="createdBy">{post.createdBy} - #{Array.from(post.uid).splice(20)}</p>
      </div>

      {bodyHasMoreThan200Words
        ? (<p className='post-body'>
          {words.splice(0, 100).join(' ')}...   <Link className='verMais' to={`/posts/${post.id}`} >Ver mais</Link>
        </p>)
        : (<p className='post-body'>{post.body}</p>)
      }

      <ul className="tags">
        {post.tags.map((tag) => (
          <li key={tag}>
            <p><span>#</span>{tag}</p>
          </li>
        ))}
      </ul>

    </Content>
  )

}

export default PostDetails