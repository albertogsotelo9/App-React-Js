import Div from '../Catalogo/Div'
import { Link } from 'react-router-dom'

export default function Item ({prod}){
                return (
                
                                <div>
                                    <Div />
                                    {prod.name}<br></br>
                                    {prod.description}<br></br>
                                    <Link to={`item/${prod.id}` }>
                                                    <button>Detalle</button>
                                    </Link>
                                </div>
                )
                                        
                                        
}