import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = ()=> useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    const agregarCart = (item)=>{
        
        setCartList([ ...cartList, item ])
    
    }
    const IsInCart = (id) => {
        return cartList.some ((prod)=> prod.id===id)
        
    }
    const precioTotal = ()=>{
        return cartList.reduce((acum, prod)=> acum + (prod.cantidad * prod.precio ), 0)
    }
    const cantidadTotal = ()=>{
        return cartList.reduce((acum, prod)=> acum += prod.cantidad,0)
    }

    const removeItem = (id) => {
        setCartList (cartList.filter(item => item.id !== id))
    }
    
    const vaciarCart = ()=>{
        setCartList([])
    }

   

    return (
        <CartContext.Provider value= {{
            cartList,
            agregarCart,
            vaciarCart,
            IsInCart,
            removeItem,
            precioTotal,
            cantidadTotal
        }}>
                {children}
        
        </CartContext.Provider>
    )
}

export default CartContextProvider
