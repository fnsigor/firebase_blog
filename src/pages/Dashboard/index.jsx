import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import styled from 'styled-components';
import { useDeleteDocument } from '../../hooks/useDeleteDocument';
import MobileMenu from '../../components/MobileMenu';




const Content = styled.div`
 
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;



.noposts {
  text-align: center;
}

.noposts p {
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
}

.noposts a {
  padding: 1rem 2.5rem;
  width: fit-content;
}

.postHeader {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  border-bottom: 2px solid #ccc;
  width: 100%;
  padding: 1rem;
  font-size: 1.8rem;
}

.postRow {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  width: 100%;
  padding: 1rem;
  gap: 5rem;  
}

.postRow p {
  color: #000;
  font-size: 1.6rem;
  text-align: start;
}


.buttons{
  display: flex;
  gap: 15px;
}

@media (max-width: 768px) {
  .postRow{
    flex-direction: column;
    align-items: start;
    gap: 0;
    margin-bottom: 1rem;
  }
}

@media (max-width: 700px) {

  h4.postHeader {
  width: 100%;
  padding: 10px;
  font-size: 1.8rem;
}

  .buttons{
    display: flex;
    flex-wrap: wrap;
  }


  .dropdown{
    margin-top: 3rem;
  }
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
      <h1>Dashboard</h1>
      <p>Gerencie os seus posts</p>
      {(posts && posts.length === 0)
        ? (
          <div className="noposts">
            <p>Não foram encontrados posts</p>
            <Link to='/posts/create' className="btn">Criar primeiro post</Link>
          </div>)
        : (
          <>
            <h4 className='postHeader'> Seus posts </h4>
            {posts && posts.map(post => (
              <div key={post.id} className="postRow">
                <p>{post.title}</p>
                <div className="buttons">
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

      <MobileMenu />
    </Content>
  )
}

export default Dashboard