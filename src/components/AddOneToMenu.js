import { useState } from "react"
export default function AddOneToMenu(props){
    const name = props.name
    const [value, setValue] = useState({[name]: "", price:""})
    function handleSubmit(e){
        e.preventDefault()
        if(props.name && value.price) {
            props.setAddOne([...props.addOne, value])
            const newObj = {[name]:"", price:""}
            setValue(newObj)
        }
        
    }
    function handleInput(e){
        setValue({...value, [e.target.name]: e.target.value });
    }
    
 
    return (
        <>  
            <input onChange={handleInput} type="text" name={props.name} value={value[name]} />
            <label htmlFor="price">Price</label>
            <input onChange={handleInput} type="number" name="price" value={value.price} />
            <button onClick={handleSubmit}>Add</button>
        </>
    )
}