import { collection, query, orderBy, onSnapshot, where, QuerySnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { db } from "../firebase/config";


export const useFetchDocuments = (docCollection, search = null, uid = null) => {


    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);


    const [cancelled, setCancelled] = useState(false);

    async function loadData() {
        if (cancelled) return

        setLoading(true)

        const collectionRef = await collection(db, docCollection)


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
                setDocuments(
                    querySnapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }))
                )
            })

            setLoading(false) //setLoading vai nos dois pq se cair no erro o codigo trava e não sai do try catch
            
        } catch (error) {
            console.log(error);
            setError(error.message)

            setLoading(false)
        }
    }

    useEffect(() => {
        loadData()
    }, [docCollection, search, uid, cancelled]);


    useEffect(() => {
        setCancelled(true);
    }, []);

    return { documents, loading, error };
}
