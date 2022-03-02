import ItemCount from '../Contador/ItemCount'
function ItemListContainer ({saludo}){
        return(
            
               <div>
                    <p>{saludo}</p>
                    <ItemCount />
               </div>
                
        );
    }
    

export default ItemListContainer