import React from 'react';
import {useEffect, useState} from 'react'
import {getFetch} from '../../Helpers/getFetch'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading]= useState(true)
    useEffect(() => {
        getFetch
        .then(resp => setProducto(resp.find(prod=> prod.id === 1)))
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
