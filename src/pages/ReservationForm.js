import React from 'react'
import axios from "axios"
import { useState, useEffect, useContext } from "react";
import Calendar from '../components/Calendar'
import {AuthContext} from '../context/auth.context'
import { AuthProviderWrapper } from '../context/auth.context';
import { useParams } from 'react-router';

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



export default function ReservationForm(props) {
    const businessId = useParams()
    const history = useHistory()
    const [formState, setFormState] = useState({})
    const [errorMessage, setErrorMessage] = useState(undefined);
    const [date, setDate] = useState(null)

    const {user} = useContext(AuthContext)
    
    function handleSubmit(event){
        console.log(date._d)
        event.preventDefault()
    const objToSend = {
        name: formState.name,
        surname: formState.surname,
        date: date._d,
        hour: null,
        people: formState.people,
        userId: user._id,
        businessId : businessId
    }

    const {user} = useContext(AuthContext)
    console.log(user._id)

  function handleSubmit(event){
    event.preventDefault()
    axios.post(
        `http://localhost:5005/reservations/61b370afc352c83cdbdf1ac4/new`,
        objToSend
    ).then((response)=>{
        console.log(objToSend)
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
            <Calendar date={date} setDate={setDate}/>
            <label>Hour:</label>
            <input
            type="string"
            name="hour"
            value="hora"
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
}
