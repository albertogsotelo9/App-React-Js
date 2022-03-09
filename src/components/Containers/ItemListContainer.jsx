
import List from '../Catalogo/Item'
import { getFetch } from '../../Helpers/getFetch';
import { useEffect, useState } from 'react';

function ItemListContainer ({saludo}){
    const [product, setProduct]= useState([])
    const [loading, setLoading]= useState(true)

    useEffect(() => {
        getFetch
        .then ((respuesta) =>{

            return respuesta
        })
        .then(resp => setProduct(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
        
    },[]);
    

    
    
    
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