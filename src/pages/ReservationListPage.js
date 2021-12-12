import { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import ReservationCard from '../components/ReservationCard';

 export default function ReservationListPage() {
    const [reservations, setReservations] = useState({});
    const { id: resId } = useParams()


    useEffect(() => {
        axios
            .get(`http://localhost:5005/business/${resId}/reservations`)
            .then((response) => {
                setReservations(response.data.data)
            })
    }, [resId] );

return (
    <div>
        <h1>List of Reservations</h1>
        {reservations.map((reservation => {
            return <ReservationCard reservation={reservation} key={reservation._id}/>
        }))}
    </div>
)
 }