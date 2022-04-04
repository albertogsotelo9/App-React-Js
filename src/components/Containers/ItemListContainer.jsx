
import List from '../Catalogo/ItemList'
//import { getFetch } from '../../Helpers/getFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {  getFirestore , collection, getDocs, query, where} from 'firebase/firestore';

function ItemListContainer ({saludo}){
    const [product, setProduct]= useState([])
    //const [producto, setProducto]= useState([])
    const [loading, setLoading]= useState(true)
    const { categoriaId } = useParams()
    
    
    
    //useEffect(() => {
   //     if (categoriaId){
    //        getFetch
    //        .then ((respuesta) =>{

    //            return respuesta
   //         })
   //         .then(resp => setProduct(resp.filter(pro => pro.categoria === categoriaId )))
   //         .catch(err => console.log(err))
   //         .finally(() => setLoading(false))

   //     }else{
   //         getFetch
   //         .then ((respuesta) =>{
//
//                return respuesta
//            })
//            .then(resp => setProduct(resp))
 //           .catch(err => console.log(err))
//            .finally(() => setLoading(false))
//        }
//    },[categoriaId]);
    
    //useEffect(() => {
    //    const db = getFirestore()
    //    const queryDb = doc(db, 'productos', 'djSrwmmsFb2gYv6hLlrI' )
    //    getDoc(queryDb)
    //    .then(resp => setProducto({id: resp.id, ...resp.data()}))
 //   },[])

 //*********************************************************
 // Filtrado
//*********************************************************
    useEffect(() => {
        const db = getFirestore()
        if (categoriaId==='gastronomia'){
            const queryFilter  = query(collection(db,'productos'), where('categoria', '==', 'Gastronomia'))
            getDocs(queryFilter)
            .then(resp => setProduct(resp.docs.map(item => ({id: item.id, ...item.data()}))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))}
        else{
            const queryColection = collection(db, 'productos')
            getDocs(queryColection)
            .then(resp => setProduct(resp.docs.map(item => ({id: item.id, ...item.data()}))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))    
        }
    },[categoriaId])
   

    
    console.log(product)
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