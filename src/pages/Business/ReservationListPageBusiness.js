import { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import ReservationCard from '../../components/ReservationCard';

const API_URI = process.env.REACT_APP_API_URI;

const ReservationListPageBusiness = () =>{
    const [reservations, setReservations] = useState({});
    const [query, setQuery] = useState('');
    const { id: resId } = useParams()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getReservations = async () => {
            try{
                const businessReservations = await axios.get(`${API_URI}/business/${resId}/reservations`)
                setReservations(businessReservations.data.data)
                setIsLoading(false)
            }
            catch(error){
                console.log(error)
            }
        }
        getReservations()
    }, [] );

return (
    <div>
        <h1>List of Reservations</h1>
        
        {isLoading === false && reservations.map((reservation => {
            
            return <ReservationCard reservation={reservation} key={reservation._id}/>
        }))}
    </div>
)}

export default ReservationListPageBusiness