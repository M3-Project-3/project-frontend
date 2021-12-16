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
            <div className="addOne__base">
                <div className="addOne__itemContainer">
                <label htmlFor={props.name}>Name</label>
                    <input onChange={handleInput} type="text" name={props.name} value={value[name]} />
                </div>
                <div className="addOne__itemContainer">
                    <label htmlFor="price">Price</label>
                    <input onChange={handleInput} type="number" name="price" value={value.price} />
                    <button className="addOne__addButton" onClick={handleSubmit}>Add</button>
                </div>
            </div>
        </>
    )
}

export default AddOneToMenu