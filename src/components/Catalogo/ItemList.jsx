
import {memo} from 'react'
import Item from '../Catalogo/Item'


 const List = memo(
     ({product})=> {

        return (
                                    
                    <div className="contenedor_imagenes">
                        {product.map((prod)=> <Item key={prod.id} prod = {prod}/>) }
                    </div>
                
            
        )

})
 export default List

