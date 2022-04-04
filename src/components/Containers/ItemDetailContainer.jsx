import React from 'react';
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
//import {getFetch} from '../../Helpers/getFetch'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getFirestore, getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading]= useState(true)
    const { detalleId } = useParams()
    
   // useEffect(() => {
    //    getFetch
    //    .then(resp => setProducto(resp.find(prod=> prod.id === detalleId)))
    //    .catch(err => console.log(err))
    //    .finally(() => setLoading(false))
   //     return ()=>{

   //     }
   // },[])
   useEffect(() => {
    const db = getFirestore()
    const queryDb  = doc(db,'productos', detalleId)
    getDoc(queryDb)
    .then(resp => setProducto({id: resp.id, ...resp.data()}))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
   },[])

    
    return (
        <div>
            {loading ? <h1>Cargando Compra</h1>
            :
                
            <ItemDetail producto={producto}/>}
        
        
        </div>
    )
}

export default ItemDetailContainer
