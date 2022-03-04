
import List from '../Catalogo/List'


function ItemListContainer ({saludo}){
    
    
    return(
            
               <div>
                    <p>{saludo}</p>
                    <div>
                        <List />
                    </div>
                    
               </div>
                
        );
    }
    

export default ItemListContainer