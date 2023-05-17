import React, { useState } from 'react'

import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'
import styled from 'styled-components'


const Content = styled.div`



  .contentContainer{
    display: flex;

}

    .contentContainer.noImg{
        display:block;
        max-width: 100rem;
        margin-inline: auto;
}
    .mainContentContainer, .secondaryContainer{
        width: 50%;
    }

  .mainContentContainer{
        img{
            margin-inline: auto;
            display: block;
            max-width: 95%;
        }
  }

  .secondaryContainer{
    flex-direction: column;
  }

  h1{
    font-size: 3.6rem;
  }

  .body{
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }


  h3{
    margin-right: 1rem;
    font-size: 1.6rem;
  }

 .tags {
  display: flex;
  margin-bottom: 2rem;
}

.tags p {
  margin-right: 1rem;
  font-size: 1.6rem;
}

.tags span {
  font-weight: bold;
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

`

function Post() {

    const { id } = useParams()
    const { document: post, loading } = useFetchDocument('posts', id)

    const [hasImage, setHasImage] = useState(true)

    if (hasImage) {
        return <ImagePost setHasImage={setHasImage} post={post} loading={loading} />
    } else {
        return <NoImagePost post={post} loading={loading} />
    }


}

function ImagePost({ setHasImage, post, loading }) {
    return (
        <Content>
            {loading && <p>Carregando post...</p>}
            {post && (
                <div className="contentContainer">
                    <div className="mainContentContainer">
                        <img src={post.image} alt={post.title} onError={() => setHasImage(false)} />
                    </div>
                    <div className="secondaryContainer">
                        <h1>{post.title}</h1>
                        <p className='body'>{post.body}</p>
                        <h3>Tags:</h3>
                        <div className="tags">
                            {post.tags.map(tagName => (
                                <p key={tagName}>
                                    <span>#</span>
                                    {tagName}
                                </p>
                            ))}
                        </div>
                        <div className="userData">
                            <p>Publicado por:</p>
                            <p>{post.createdBy}</p>
                            <p>#{post.uid}</p>
                        </div>
                    </div>
                </div>
            )}
        </Content>
    )
}


function NoImagePost({ post, loading }) {
    return (
        <Content >
            {loading && <p>Carregando post...</p>}
            {post && (
                <div className="contentContainer noImg">

                    <h1>{post.title}</h1>
                    <p className='body'>{post.body}</p>

                    <h3>Tags:</h3>
                    <div className="tags">
                        {post.tags.map(tagName => (
                            <p key={tagName}>
                                <span>#</span>
                                {tagName}
                            </p>
                        ))}
                    </div>
                    <div className="userData">
                        <p>Publicado por:</p>
                        <p>{post.createdBy}</p>
                        <p>#{post.uid}</p>
                    </div>
                </div>

            )}
        </Content>
    )
}

export default Post