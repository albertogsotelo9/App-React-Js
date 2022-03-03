import {useState} from 'react'
import Div from '../Catalogo/Div'
import '../../App.css'
function ItemCount() {
    const [count, setCount] = useState(0);
    

    const itemCounter = ()=>{
        setCount(count+1);
    };

    return (
        <div className="contenedor_imagenes">
            <div>
                <Div />
                <label>{ count }</label>
                <button onClick={itemCounter}>Agregar al Carrito</button>
            </div>
            <div>
                <Div />
                <label>{ count }</label>
                <button onClick={itemCounter}>Agregar al Carrito</button>
            </div>
            <div>
                <Div />
                <label>{ count }</label>
                <button onClick={itemCounter}>Agregar al Carrito</button>
            </div>
            <div>
                <Div />
                <label>{ count }</label>
                <button onClick={itemCounter}>Agregar al Carrito</button>
            </div>
            <div>
                <Div />
                <label>{ count }</label>
                <button onClick={itemCounter}>Agregar al Carrito</button>
            </div>
            <div>
                <Div />
                <label>{ count }</label>
                <button onClick={itemCounter}>Agregar al Carrito</button>
            </div>
            <div>
                <Div />
                <label>{ count }</label>
                <button onClick={itemCounter}>Agregar al Carrito</button>
            </div>
            <div>
                <Div />
                <label>{ count }</label>
                <button onClick={itemCounter}>Agregar al Carrito</button>
            </div>
            
        </div>
    )

}

export default ItemCount
