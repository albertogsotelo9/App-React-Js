import { useState } from "react"



const InputCount = ()=>{

    return (
        <Link to = '/cart'>
            <button></button>
        </Link>
    )
}

const ButtonCount = ({handleInter})=>{
    return(
        <button></button>
    )
}

const Intercambiabilidad = ()=>{

    const [inputType, setInputType] = useState('button')
    const handleInter=()=>{
        setInputType('input')
    }
    
    return (
        <div>
            <h2>Item Description</h2>
            
            {
                inputType === 'button' ? 
                    <ButtonCount handleInter={handleInter} />
                : 
                    <InputCount />
            }
             {/* <Count onConfirm={addToCart} maxQuantity={itemMax} />  */}
        </div>
    )
}

export default Intercambiabilidad

