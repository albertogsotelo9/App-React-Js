

import Item from '../Catalogo/Item'


 const List = ({product})=> {

    return (
                                
                 <div className="contenedor_imagenes">
                     {product.map((prod)=> <Item key={prod.id} prod = {prod}/>) }
                 </div>
            
        
    )

}
 export default List

