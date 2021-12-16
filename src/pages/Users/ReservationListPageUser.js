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
        axios
            .get(`${API_URI}/user/${userId}/reservations`)
            .then((response) => {
        
                setReservations(response.data.data)
                setIsLoading(false)
            })
    }, [query] );

return (
    <div className="reservationPage__font">
        <h1>My Reservations</h1>
        { isLoading === false && reservations.length > 0 ? reservations.map((reservation => {
            return <ReservationCard reservation={reservation} key={reservation._id} />
        }))
            : <span>There are no reservations yet!</span>
        }
    </div>
)
}

export default ReservationListPageUser