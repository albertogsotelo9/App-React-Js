import { useState } from "react"
import ItemCount from '../Contador/ItemCount' 
import {Link} from 'react-router-dom'
import { useCartContext } from "../../context/cartContext"


const ItemDetail = ({producto}) => {
    const [count, setCount] = useState(null)

    const {agregarCart, IsInCart } = useCartContext()
    const onAdd = cant =>{
        setCount(cant)
        agregarCart({...producto, cantidad: cant})
        IsInCart()
    }

    
    return (
        <div>
            
            <h1>Detalle de Compra</h1>
            <p>Producto: {producto.name}</p><br></br>
            <p>Descripción: {producto.description}</p><br></br>
            <p>Stock disponible: {producto.stock}</p><br></br>
            <p>ID de producto: {producto.id}</p>
            
            {   
                IsInCart(producto.id)? 
                <Link to = '/cart'>
                    <br></br><button>Ir al carrito</button><br></br><br></br>
                    <h2>Este producto fue agregado al carrito</h2>
                </Link>
                
                :
                <ItemCount initial={1} stock={10} onAdd={onAdd} />
                

            }        
        </div>
    )
} 

export default ItemDetail