import React from 'react'
import axios from "axios"
import { useState, useEffect, useContext } from "react";
import Calendar from '../components/Calendar'
import {AuthContext} from '../context/auth.context'
import { useParams } from 'react-router';
import AddHoursToForm from '../components/AddHoursToForm';

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const API_URL =  process.env.REACT_APP_API_URI;


const ReservationForm = (props) => {
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
        const apiRequest = async () => {
            try{
                const businessDetails = await axios.get(`http://localhost:5005/business/${businessId}/details`)
                setHoursSelected(businessDetails.data.data.timetable)
                setIsLoading(false)
            }
            catch(error){
                console.log(error)
            }
        }
        apiRequest()
    },[])
    
    

    const handleSubmit = async (event) => {
        try{
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
            const newRes = await axios.post(
                `${API_URL}/reservations/${businessId}/new`,
                objToSend
            )
            setFormState({})
            history.push("/")
            } 
        }
        catch(error){
            console.log(error)
        }
}

const handleInput = (event) => {
    setFormState({...formState, [event.target.name]: event.target.value })// setFormState(Object.assign({}, formState, {[ecen.name]: event.value}))
   
}
const posibleHourRange = []
    if(hoursSelected){
        hoursSelected.map(a=>{
           return posibleHourRange.push({value:a, label: a})
        })
    }
    
   
    return (
        <div className='reservationForm'>
        <form onSubmit={handleSubmit}>

            <input placeholder='Name' required type="text" name="name" value={formState.name} onChange={handleInput} />

       
            <input placeholder='Surname' required type="text" name="surname" value={formState.surname} onChange={handleInput} />

            <input placeholder='Nº of people' required type="number" name="people" value={formState.people} onChange={handleInput} />

         
            <Calendar required date={date} setDate={setDate}/>
            <div className='hourField'>
                <label>Hour:</label> 
                {isLoading === false && <AddHoursToForm selectedHourRange={selectedHourRange} setSelectedHourRange={setSelectedHourRange} options={posibleHourRange} />}
            </div>
          

           

            <button className='bookButton' type="submit">Book!</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
       
            
        </div>
    )
}

export default ReservationForm












