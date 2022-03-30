
import List from '../Catalogo/ItemList'
import { getFetch } from '../../Helpers/getFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemListContainer ({saludo}){
    const [product, setProduct]= useState([])
    const [loading, setLoading]= useState(true)
    const { categoriaId } = useParams()
    
    
    
    useEffect(() => {
        if (categoriaId){
            getFetch
            .then ((respuesta) =>{

                return respuesta
            })
            .then(resp => setProduct(resp.filter(pro => pro.categoria === categoriaId )))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

        }else{
            getFetch
            .then ((respuesta) =>{

                return respuesta
            })
            .then(resp => setProduct(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }
    },[categoriaId]);
    

    
    
    
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