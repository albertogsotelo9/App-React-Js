import Div from './Div'
import ItemCount from '../Contador/ItemCount'
import { Link } from 'react-router-dom'


const List = ({product})=> {
    const onAdd= (cantidad)=>{
        console.log(`seleccionaste ${cantidad} productos`)
    }
    
      
    

    return (
        <div className="contenedor_imagenes">
            

                
                
                            
                        
                            
                                {product.map((prod)=>  <div key={prod.id}> 
                                        <Div />
                                          {prod.name}<br></br>
                                          {prod.description}<br></br>
                                          unidades en stock {prod.stock}<br></br>
                                          <ItemCount initial={1} stock={prod.stock} onAdd={onAdd} />
                                          
                                          <Link to={`item/${prod.id}`}>
                                                <button>Detalle</button>
                                          </Link>
                                          </div>
                                )}
                        
                
                
            
            
            
        </div>
    )

}

export default List
