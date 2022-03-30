
import { useCartContext } from '../../context/cartContext';

const Cart = ()=>{
    const { cartList, vaciarCart } = useCartContext()
    console.log(cartList)
    return(
        <div>
            {cartList.map(item => <li>{item.name} {item.descripcion} {item.stock} {item.cantidad} </li>)}
            <button onClick={vaciarCart}>Vaciar Carrito</button>
        </div>
    )
}

export default Cart