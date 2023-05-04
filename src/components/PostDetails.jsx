

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Content = styled.div`
    
  margin-bottom: 2em;


img {
  max-width: 600px;
}
 h2 {
  margin-bottom: 0.4em;
}
.tags {
  margin-bottom: 1.2em;
  display: flex;
}

.tags p {
  margin-right: 0.5em;
}

.tags span {
  font-weight: bold;
}

.createdby {
  font-style: italic;
  color: #444;
  font-size: 0.8em;
  margin-bottom: 1em;
}

`

function PostDetails({ post }) {
    return (
        <Content>
            <img src={post.image} alt={post.title} />
            <h2>{post.title}</h2>
            <p className="createdBy">{post.createdBy}</p>
            <div className="tags">
                {post.tags.map((tag) => (
                    <p key={tag}>
                        <span>#</span>
                        {tag}
                    </p>
                ))}
            </div>
            <Link to={`/posts/${post.id}`} className="btn btn-outline">Ler</Link>
        </Content>
    )
}

export default PostDetails