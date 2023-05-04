import React from 'react'

import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'
import styled from 'styled-components'


const Content = styled.div`

  text-align: center;


 h3 {
  margin-bottom: 0.2em;
}

 .tags {
  display: flex;
  justify-content: center;
}

.tags p {
  margin-right: 1em;
}

.tags span {
  font-weight: bold;
}

`

function Post() {

    const { id } = useParams()
    const { document: post, loading } = useFetchDocument('posts', id)

    return (
        <Content>
            {loading && <p>Carregando post...</p>}
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <img src={post.image} alt={post.title} />
                    <p>{post.body}</p>
                    <h3>Tags:</h3>
                    <div className="tags">
                        {post.tags.map(tagName => (
                            <p key={tagName}>
                                <span>#</span>
                                {tagName}
                            </p>
                        ))}
                    </div>
                </>
            )}
        </Content>
    )
}

export default Post