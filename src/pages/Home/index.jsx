import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import PostDetails from '../../components/PostDetails'




const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

 

    .search-form{
        max-width: 100%;
        width: 60%;
        display: flex;
        justify-content:center;
        margin-bottom: 6rem;

        input {
        margin-right: 10px;
        width: 50%;
        }
    }

    .noposts {
        text-align: center;
    }

    .noposts p {
        margin-bottom: 1.5em;
    }

    .noposts a {
        padding: 10px 25px;
    }


`



function Home() {

    const [query, setQuery] = useState('')
    const navigate = useNavigate()

    const { documents: posts, loading } = useFetchDocuments('posts')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (query) {
            return navigate(`/search?q=${query}`)
        }
    }

    return (
        <Content>
            <h1>Veja os nossos posts mais recentes</h1>
            <form onSubmit={handleSubmit} className='search-form'>
                <input
                    type="text"
                    placeholder='Ou busque por tags'
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <button className="btn btn-dark">Pesquisar</button>
            </form>

            <div>
                {loading && <p>Carregando...</p>}
                {posts && posts.map(post => <PostDetails key={post.id} post={post} />)}
                {(posts && posts.length === 0) && (
                    <div className="noposts">
                        <p>Não foram encontrados posts</p>
                        <Link to='/posts/create' className="btn">Criar primeiro post</Link>
                    </div>
                )}
            </div>
        </Content>
    )
}

export default Home