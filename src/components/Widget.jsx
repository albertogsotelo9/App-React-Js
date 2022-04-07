
import './NavBar.css'
import {NavLink} from 'react-router-dom'
import { useCartContext } from '../context/cartContext'
function Carrito  (){
    
    const  {cantidadTotal} = useCartContext()
    return (
               
                <NavLink to ='/cart'>
                    <img className="widget" src={require('../Images/cart_icon_w.png')}  alt="" />
                    <div className='countCartNumber'>{cantidadTotal()!== 0 && cantidadTotal()}</div>
                </NavLink>
            

              
    )
    
}

export default Carrito