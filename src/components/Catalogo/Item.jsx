import Div from '../Catalogo/Div'
import { Link } from 'react-router-dom'
import imagen from '../../Images/Film.png'


export default function Item ({prod}){
                return (
                
                                <div>
                                    
                                    {prod.imagen}<br></br>
                                    {prod.name}<br></br>
                                    {prod.descripcion}<br></br>
                                    
                                    <Link to={`item/${prod.id}` }>
                                                    <button>Detalle</button>
                                    </Link>
                                </div>
                )
                                        
                                        
}