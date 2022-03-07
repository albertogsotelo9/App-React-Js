import '../../App.css'
cd import { useState } from 'react';
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
        if(count === 1){
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
                <button onClick={AgregarCarro}>Agregar al Carrito</button>
            </div>
            
        </div>
    )

}

export default ItemCount
