import { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import ReservationCard from '../../components/ReservationCard';

const API_URI = process.env.REACT_APP_API_URI;

const ReservationListPageUser = () => {
    const [reservations, setReservations] = useState({});
    const [query, setQuery] = useState('');
    const { id: userId } = useParams()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getReservations = async () =>{
            try{
                const apiRequest = await axios.get(`http://localhost:5005/user/${userId}/reservations`)
                setReservations(apiRequest.data.data)
                setIsLoading(false)
            }
            catch(error){
                console.log(error)
            }
        }
        getReservations()
    }, [query] );

return (
    <div className="reservationPage__font">
        <h1>My Reservations</h1>
        { isLoading === false && reservations.map((reservation => {
            return <ReservationCard reservation={reservation} key={reservation._id} />
        }))}
    </div>
)}

export default ReservationListPageUser