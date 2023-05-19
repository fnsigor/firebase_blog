import React, { useEffect, useState } from 'react'
import { useQuery } from '../../hooks/useQuery'
import PostDetails from '../../components/PostDetails'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components';

import { collection, query, orderBy, onSnapshot, where } from 'firebase/firestore'

import { db } from "../../firebase/config";
import { useAuthValue } from '../../context/AuthContext'
import MobileMenu from '../../components/MobileMenu'

const Content = styled.div`

display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

.noposts p {
    margin-bottom: 30px;
    font-size: 1.6rem;
}

.noposts{
    display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 706px) {
    .noposts a {
        display: none;
    }

}

`






function Search() {

    const urlParamas = useQuery()
    const search = urlParamas.get('q')
    const [posts, setPosts] = useState([])

    const { user } = useAuthValue()
    const navigate = useNavigate();


    
    useEffect(() => {

        if (!user) {
            navigate("/login");
        }

        async function loadData() {
    
            const collectionRef = await collection(db, 'posts')
    
    
            try {
    
    
                let q
    
                if (search) {
                    q = await query(collectionRef,
                        where('tags', 'array-contains', search),
                        orderBy('createdAt', 'desc'))
    
                } else if (uid) {
                    q = await query(collectionRef,
                        where('uid', '==', uid),
                        orderBy('createdAt', 'desc'))
    
                } else {
                    q = await query(collectionRef, orderBy('createdAt', 'desc'))
    
                }
    
    
                await onSnapshot(q, (querySnapshot) => { //onSnapshot mapeia os dados do banco e quando eles são alterados, tras essa alteração
                    setPosts(
                        querySnapshot.docs.map(doc => ({
                            id: doc.id,
                            ...doc.data()
                        }))
                    )
                })
    
               
                
            } catch (error) {
                console.log(error);
             
            }
        }

        loadData()
    
    }, [search, query]);

    return (
        <Content>
            <h1>#{search}</h1>
            <div>
                {(posts && posts.length === 0) && (
                    <div className="noposts">
                        <p>Não foram encontrados posts a partir da sua busca</p>
                        <Link to='/' className='btn btn-dark'>Voltar</Link>
                    </div>
                )}
                {posts && posts.map(post => <PostDetails key={post.id} post={post} />)}
            </div>
            <MobileMenu/>
        </Content>
    )
}

export default Search