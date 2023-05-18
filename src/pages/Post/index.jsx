import React, { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'
import styled from 'styled-components'
import { useAuthValue } from '../../context/AuthContext'
import Tag from '../../components/Tag'


const Content = styled.div`
    
    max-width: 80rem;
    width: fit-content;
    margin-inline: auto;


   

  h1{
    font-size: 3.6rem;
  }

  .userData{
    margin-bottom: 6rem;
  }

  .userData p:nth-child(1){
    font-size: 1.6rem;
    margin-bottom: .5rem;
    }
    .userData p:nth-child(2){
        font-size: 2rem;
    }
    .userData p:nth-child(3){
        font-size: 1.4rem;
        font-style: italic;
    }

  img{
    max-width: 100%;
    display: block;
    margin-inline: auto;
    margin-bottom: 2rem;
}

  h1, p{
    text-align: start;
  }

  .body{
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  


  h3{
    margin-right: 1rem;
    font-size: 1.6rem;
  }
`

function Post() {

    const { id } = useParams()
    const { document: post, loading } = useFetchDocument('posts', id)

    const { user } = useAuthValue();

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [])

    const [hasImage, setHasImage] = useState(true)



    return (
        <>
            {loading && <p>Carregando post...</p>}
            {post && (
                <Content >
                    <h1>{post.title}</h1>

                    <div className="userData">
                        <p>Publicado por:</p>
                        <p>{post.createdBy}</p>
                        <p>#{post.uid}</p>
                    </div>

                    {hasImage && <img onError={() => setHasImage(false)} src={post.image} alt={post.title} />}

                    <p className='body'>{post.body}</p>
                    <h3>Tags:</h3>
                    <ul className="tagList">
                        {post.tags.map((tag) => (
                            <Tag key={tag} tagName={tag} />
                        ))}
                    </ul>

                </Content>

            )}
        </>
    )

}




export default Post