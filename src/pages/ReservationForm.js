import React from 'react'
import axios from "axios"
import { useState, useEffect } from "react";
import Calendar from '../components/Calendar'

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export default function ReservationForm() {
    const history = useHistory()
    const [formState, setFormState] = useState({})
    const [errorMessage, setErrorMessage] = useState(undefined);

  function handleSubmit(event){
    event.preventDefault()
    axios.post(
        "https://ironbnb-m3.herokuapp.com/apartments",
        formState
    ).then((response)=>{
        setFormState({})
        history.push("/")
    }
        
    ).catch(console.log)
}

function handleInput(event){
    setFormState({...formState, [event.target.name]: event.target.value })// setFormState(Object.assign({}, formState, {[ecen.name]: event.value}))
}
    return (
        <div>

        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={formState.name} onChange={handleInput} />

            <label>Surname:</label>
            <input type="text" name="surname" value={formState.surname} onChange={handleInput} />

            <label>Day:</label>
            <Calendar />

            <label>Hour:</label>
            <input
            type="time"
            name="hour"
            value={formState.hour}
            onChange={handleInput}
            />

            <label>People:</label>
            <input type="number" name="people" value={formState.people} onChange={handleInput} />

  

            <button type="submit">Book!</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
       
            
        </div>
    )
}
