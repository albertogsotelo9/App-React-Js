import Div from '../Catalogo/Div'
import ItemCount from '../Contador/ItemCount'
import { getFetch } from '../../Helpers/getFetch';
import { useEffect, useState } from 'react';
function List() {
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
    
    

    return (
        <div className="contenedor_imagenes">
            

                
                {       loading ? <h1>Espere unos minutos</h1>
                        :
                        product.map((prod)=> <div key={prod.id}>
                                          <Div />
                                          {prod.name}<br></br>
                                          {prod.description}<br></br>
                                          unidades en stock {prod.stock}<br></br>
                                          <ItemCount />
                                      </div>)
                }
            
            
            
        </div>
    )

}

export default List
