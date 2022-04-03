
import './NavBar.css'
import {NavLink} from 'react-router-dom'
import { useCartContext } from '../context/cartContext'
function Carrito  (){
    
    const  {cantidadTotal} = useCartContext()
    return (
            
                <NavLink to ='/cart'>
                    {cantidadTotal()!== 0 && cantidadTotal()}
                    <img onClick ={ ()=> console.log('click')} className="widget" src={require('../Images/cart_icon_w.png')} alt="" />
                </NavLink>
            

              
    )
    
}

export default Carrito