import Div from '../Catalogo/Div'
import '../../App.css'
import { getFetch } from '../../Helpers/getFetch';
import { useEffect, useState } from 'react';
function ItemCount() {
    const [product, setProduct]= useState([])
    const [loading, setLoading]= useState([true])

    useEffect(() => {
        getFetch
        .then((respuesta)=> {
            //throw new Error('esto es un error')
            return respuesta;
        })
        .then((resp) => setProduct(resp)) 
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
        
    },[])
    const [count, setCount] = useState(0);
    const itemCounter = (()=>{
        setCount(count+1)})
    

    return (
        <div className="contenedor_imagenes">
            <div>
                <label>{ count }</label>
                <button onClick={itemCounter}>Agregar al Carrito</button>
            </div>
            
        </div>
    )

}

export default ItemCount
