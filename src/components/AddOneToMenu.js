import { useState } from "react"
const AddOneToMenu = (props) => {
    const name = props.name
    const [value, setValue] = useState({[name]: "", price:""})
    const handleSubmit = (e) => {
        e.preventDefault()
        if(props.name && value.price) {
            props.setAddOne([...props.addOne, value])
            const newObj = {[name]:"", price:""}
            setValue(newObj)
        }
    }
    const handleInput = (e) => {
        setValue({...value, [e.target.name]: e.target.value });
    }
 
    return (
        <>  
            <div className="addDish">
                <div >
                <label htmlFor={props.name}></label>
                    <input placeholder="Dish name" onChange={handleInput} type="text" name={props.name} value={value[name]} />
                </div>
                <div >
                    <label htmlFor="price"></label>
                    <input placeholder="Price" onChange={handleInput} type="number" name="price" value={value.price} />
                    <br/>
                    
                </div>
                <button className="addOne__addButton" onClick={handleSubmit}>Add</button>
            </div>
        </>
    )
}

export default AddOneToMenu