import React from 'react'
import { useQuery } from '../../hooks/useQuery'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import PostDetails from '../../components/PostDetails'
import { Link } from 'react-router-dom'
import styled from 'styled-components';



const Content = styled.div`

display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  h1 {
  margin-bottom: 1em;
}

 p {
  margin-bottom: 30px;
}

`






function Search() {

    const query = useQuery()
    const search = query.get('q')

    const { documents: posts } = useFetchDocuments('posts', search)

    return (
        <Content>
            <h2>Search</h2>
            <div>
                {(posts && posts.length === 0) && (
                    <div className="noposts">
                        <p>Não foram encontrados posts a partir da sua busca</p>
                        <Link to='/' className='btn btn-dark'>Voltar</Link>
                    </div>
                )}
                {posts && posts.map(post => <PostDetails key={post.id} post={post} />)}
            </div>
        </Content>
    )
}

export default Search