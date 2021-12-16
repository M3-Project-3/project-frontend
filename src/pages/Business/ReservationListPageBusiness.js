import { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import ReservationCard from '../../components/ReservationCard';

const API_URI = process.env.REACT_APP_API_URI;

const ReservationListPageBusiness = () => {
    const [reservations, setReservations] = useState({});
    const [query, setQuery] = useState('');
    const { id: resId } = useParams()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios
            .get(`${API_URI}/business/${resId}/reservations`)
            .then((response) => {
                setReservations(response.data.data)
                setIsLoading(false)
            })
    }, [] );

return (
    <div className='reservationsBusiness'>
    
        <h1>List of Reservations</h1>
        
        {isLoading === false && reservations.map((reservation => {
            
            return <ReservationCard reservation={reservation} key={reservation._id}/>
        }))}
    </div>
)
 }

export default ReservationListPageBusiness