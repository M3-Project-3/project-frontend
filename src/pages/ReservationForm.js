import React from 'react'
import axios from "axios"
import { useState, useEffect, useContext } from "react";
import Calendar from '../components/Calendar'
import {AuthContext} from '../context/auth.context'
import { AuthProviderWrapper } from '../context/auth.context';
import { useParams } from 'react-router';
import AddHourRange from '../components/AddHourRange';

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export default function ReservationForm(props) {
    const {businessId} = useParams()
    console.log("businessId",businessId)
    const history = useHistory()
    const [formState, setFormState] = useState({})
    const [errorMessage, setErrorMessage] = useState(undefined);
    const [date, setDate] = useState(null)
    const {user} = useContext(AuthContext)
    const [hoursSelected, setHoursSelected] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [selectedHourRange, setSelectedHourRange] = useState()

    useEffect(()=>{
        axios.get(`http://localhost:5005/business/${businessId}/reservations`)
        .then(response=>{
            console.log("sasaddsada",response.data.data)
            setHoursSelected(response.data.timetable)
            setIsLoading(false)
        })
    },[])
    
    function handleSubmit(event){
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
        {isLoading === false && console.log("hoursSelected",hoursSelected)}
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={formState.name} onChange={handleInput} />

            <label>Surname:</label>
            <input type="text" name="surname" value={formState.surname} onChange={handleInput} />

            <label>Day:</label>
            <Calendar date={date} setDate={setDate}/>
            <label>Hour:</label>


            {isLoading === false && <AddHourRange selectedHourRange={selectedHourRange} setSelectedHourRange={setSelectedHourRange} restaurant={hoursSelected}/>}



            <input
            type="string"
            name="hour"
            value={formState.timetable}
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
