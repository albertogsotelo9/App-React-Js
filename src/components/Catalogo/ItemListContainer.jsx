
import List from './Item'
import { getFetch } from '../../Helpers/getFetch';
import { useEffect, useState } from 'react';

function ItemListContainer ({saludo}){
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
    

    useEffect(() => {
        let url = 'https://api.mercadolibre.com/sites/MLA/search'
        fetch(url)
        .then(response => response.json())
        .then(response => console.log(response))
    },[])
    
    
    return(
            
               <div>
                    <p>{saludo}</p>
                    <div >
                        {   loading ? <h1>Espere unos minutos</h1>
                            :
                            <List product={product}/>
                        }
                            
                        
                         
                        
                    </div>
                    
               </div>
                
        );
    }
    

export default ItemListContainer