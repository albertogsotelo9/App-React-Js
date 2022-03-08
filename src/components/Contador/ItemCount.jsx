import '../../App.css'
import { useState } from 'react';
function ItemCount({initial, stock, onAdd}) {
    
    const [count, setCount] = useState(initial);
    const itemCountUp = ()=>{
        if (count >= stock){
            alert("No hay stock")
        }else{
            setCount(count+1)
        }
    }
    const itemCountDown = ()=>{
        if(count === 0){
            alert ("No es posible restar más")
        }else{
            setCount(count-1)
        }
    }
    const AgregarCarro= ()=>{
        onAdd(count)
    
    }    
    

    return (
        <div className="contenedor_imagenes">
            <div>
                <button onClick={itemCountDown}>-</button>
                <label>{ count }</label>
                <button onClick={itemCountUp}>+</button><br></br>
                <button onClick={AgregarCarro}>Detalle</button>
            </div>
            
        </div>
    )

}

export default ItemCount
