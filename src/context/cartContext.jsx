import { createContext, useState, useContext, useEffect } from "react";

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
    const vaciarCart = ()=>{
        setCartList([])
    }

    useEffect(()=>{
        console.log(cartList)
    }, [cartList])

    return (
        <CartContext.Provider value= {{
            cartList,
            agregarCart,
            vaciarCart,
            IsInCart
        }}>
                {children}
        
        </CartContext.Provider>
    )
}

export default CartContextProvider
