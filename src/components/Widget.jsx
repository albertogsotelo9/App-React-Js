
import './NavBar.css'
function Widget (){
    
    return (
            <img onClick ={ ()=> console.log('click')} className="widget" src={require('../Images/cart_icon_w.png')} alt="" />

              
    )
    
}

export default Widget