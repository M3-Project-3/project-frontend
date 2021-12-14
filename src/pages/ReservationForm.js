import React from 'react'
import axios from "axios"
import { useState, useEffect, useContext } from "react";
import Calendar from '../components/Calendar'
import {AuthContext} from '../context/auth.context'
import { AuthProviderWrapper } from '../context/auth.context';
import { useParams } from 'react-router';
import AddHoursToForm from '../components/AddHoursToForm';

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const API_URL =  process.env.REACT_APP_API_URI;


export default function ReservationForm(props) {
    const {businessId} = useParams()
    const history = useHistory()
    const [formState, setFormState] = useState({})
    const [errorMessage, setErrorMessage] = useState(undefined);
    const [date, setDate] = useState(null)
    const {user} = useContext(AuthContext)
    const [hoursSelected, setHoursSelected] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [selectedHourRange, setSelectedHourRange] = useState()
    useEffect(()=>{
        axios.get(`${API_URL}/business/${businessId}/reservations`)
        .then(response=>{
            setHoursSelected(response.data.data[0].businessId.timetable)
            setIsLoading(false)
        })  
    },[])
    
    

    function handleSubmit(event){
        event.preventDefault()

        if(!formState.name || !formState.surname || !date._d || !selectedHourRange.value || !formState.people || !user._id || !businessId){
            setErrorMessage("All fields are required")
        }
        else{
        const objToSend = {
            name: formState.name,
            surname: formState.surname,
            date: date._d,
            hour: selectedHourRange.value,
            people: formState.people,
            userId: user._id,
            businessId : businessId
        }

        axios.post(
            `${API_URL}/reservations/${businessId}/new`,
            objToSend
        )
        .then((response)=>{
            
            setFormState({})
            history.push("/")
        })
        .catch(console.log)
    }
}

function handleInput(event){
    setFormState({...formState, [event.target.name]: event.target.value })// setFormState(Object.assign({}, formState, {[ecen.name]: event.value}))
   
}
const posibleHourRange = []
    if(hoursSelected){
        hoursSelected.map(a=>{
           return posibleHourRange.push({value:a, label: a})
        })
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


            {isLoading === false && <AddHoursToForm selectedHourRange={selectedHourRange} setSelectedHourRange={setSelectedHourRange} options={posibleHourRange} />}

            <label>People:</label>
            <input type="number" name="people" value={formState.people} onChange={handleInput} />

           

            <button type="submit">Book!</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
       
            
        </div>
    )
}












