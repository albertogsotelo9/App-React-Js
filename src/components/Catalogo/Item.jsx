import Div from './Div'
import ItemCount from '../Contador/ItemCount'


const List = ({product})=> {
    const onAdd= (cantidad)=>{
        console.log(`seleccionaste ${cantidad} productos`)
    }
    
    
    

    return (
        <div className="contenedor_imagenes">
            

                
                <div>
                                          <Div />
                                          {product.name}<br></br>
                                          {product.description}<br></br>
                                          unidades en stock {product.stock}<br></br>
                                          <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
                </div>
                
            
            
            
        </div>
    )

}

export default List
