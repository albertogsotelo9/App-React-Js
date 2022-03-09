import Div from './Div'
import ItemCount from '../Contador/ItemCount'


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
                                          </div>
                                )}
                        
                
                
            
            
            
        </div>
    )

}

export default List
