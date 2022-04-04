
import { useCartContext } from '../../context/cartContext';
import {useState} from 'react'
import { addDoc, getFirestore , collection } from 'firebase/firestore';

function Cart  (){
    
    const [dataForm, setDataForm] = useState({
      email: '', name: '', phone: ''
    })
    
    
    const { cartList, vaciarCart, removeItem, precioTotal } = useCartContext()
    console.log(cartList)
    const generarOrden= async (e)=>{
        e.preventDefault();
      
        let orden = {}      
      
        orden.buyer = dataForm
        orden.total = precioTotal();
    
        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.name;
            const precio = cartItem.precio*cartItem.cantidad;
            return {id, nombre, precio}
                
        })
        const db = getFirestore()
        const queryCollection = collection(db, 'ordenes')
        addDoc(queryCollection, orden)
        .catch(err => console.log(err))
        .finally(() => console.log('termino'))
    }
    console.log(dataForm)
            const handleChange = (e) => {
                    setDataForm({
                    ...dataForm,
                    [e.target.name]: e.target.value
                    })
                }
            
                    
        return(
            <div>
                
                {cartList.map(item => 
                
                                        <>
                                            <li key={item.id}>Nombre: {item.name} Precio: {item.precio} Stock: {item.stock} Cantidad: {item.cantidad} </li>
                                            <button onClick={()=> removeItem(item.id)}> X </button>    
                                        </>
                                            
                            )
                                            
                                            
                }
                <button onClick={vaciarCart}>Vaciar Carrito</button>
                
                <form 
                         onSubmit={generarOrden}              
                   >
                            <input 
                                type='text' 
                                name='name' 
                                placeholder='name' 
                                value={dataForm.name}
                                onChange={handleChange}
                            /><br />
                            <input 
                                type='text' 
                                name='phone'
                                placeholder='tel' 
                                value={dataForm.phone}
                                onChange={handleChange}
                            /><br/>
                            <input 
                                type='email' 
                                name='email'
                                placeholder='email' 
                                value={dataForm.email}
                                onChange={handleChange}
                            /><br/>
                            
                            <button>Terminar Compra</button>
                </form>

                                            
            </div>
        )
}


export default Cart