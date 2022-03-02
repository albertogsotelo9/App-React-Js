import {useState} from 'react'
import Div from '../Catalogo/Div'

function ItemCount() {
    const [count, setCount] = useState(0);
    

    const itemCounter = ()=>{
        setCount(count+1);
    };

    return (
        <div>
            <Div />
            <label>{ count }</label>
            <button onClick={itemCounter}>Agregar al Carrito</button>
        </div>
    )

}

export default ItemCount
