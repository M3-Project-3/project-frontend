import { useState } from "react"
export default function AddOneToMenu(props){
    const [value, setValue] = useState({})
    function handleSubmit(e){
        e.preventDefault()
        if(props.name && value.price) {
            props.setAddOne([...props.addOne, value])
        }
        setValue({[props.name]:"", price:""})
        
    }
    function handleInput(e){
        setValue({...value, [e.target.name]: e.target.value });
    }
    
 
    return (
        <>  
            <input onChange={handleInput} type="text" name={props.name} value={value.name} />
            <label for="price">Price</label>
            <input onChange={handleInput} type="number" name="price" value={value.price} />
            <button onClick={handleSubmit}>Add</button>
        </>
    )
}