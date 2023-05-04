import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import styled from 'styled-components';
import { useDeleteDocument } from '../../hooks/useDeleteDocument';




const Content = styled.div`
 
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


h2 {
  font-size: 2.2em;
  margin-bottom: 0.5em;
}

 p {
  color: #aaa;
  margin-bottom: 1em;
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

.post_header {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  border-bottom: 2px solid #ccc;
  width: 80%;
  padding: 10px;
}

.post_row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  width: 80%;
  padding: 10px;
}

.post_row p {
  color: #000;
}

.post_row button,
.post_row a {
  margin: 0 5px;
  height: 30px;
  width: 100px;
}

`




function Dashboard() {

  const { user } = useAuthValue()
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [])

  const uid = user.uid

  const { documents: posts, loading } = useFetchDocuments('posts', null, uid)

  const { deleteDocument } = useDeleteDocument('posts')

  if (loading) return <p>Carregando...</p>


  return (
    <Content>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {(posts && posts.length === 0)
        ? (
          <div className="noposts">
            <p>Não foram encontrados posts</p>
            <Link to='/posts/create' className="btn">Criar primeiro post</Link>
          </div>)
        : (
          <>
            <div className='post_header'>
              <span>Título</span>
              <span>Ações</span>
            </div>
            {posts && posts.map(post => (
              <div key={post.id} className="post_row">
                <p>{post.title}</p>
                <div>
                  <Link to={`/posts/${post.id}`} className="btn btn-outline">Ver</Link>
                  <Link to={`/posts/edit/${post.id}`} className="btn btn-outline">Editar</Link>
                  <button
                    onClick={() => deleteDocument(post.id)}
                    className='btn btn-outline btn-danger'
                  >Excluir</button>
                </div>
              </div>
            ))}
          </>
        )}

      <div>
      </div>
    </Content>
  )
}

export default Dashboard