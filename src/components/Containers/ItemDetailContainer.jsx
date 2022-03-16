import React from 'react';
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import {getFetch} from '../../Helpers/getFetch'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading]= useState(true)
    const { detalleId } = useParams()
    
    useEffect(() => {
        getFetch
        .then(resp => setProducto(resp.find(prod=> prod.id === detalleId)),)
        .finally(() => setLoading(false))
    },[detalleId])

    
    return (
        <div>
            {loading ? <h1>Cargando Compra</h1>
            :
                
            <ItemDetail producto={producto}/>}
        
        
        </div>
    )
}

export default ItemDetailContainer
