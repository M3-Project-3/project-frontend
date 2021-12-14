import { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import ReservationCard from '../../components/ReservationCard';

 export default function ReservationListPageBusiness() {
    const [reservations, setReservations] = useState({});
    const [query, setQuery] = useState('');
    const { id: resId } = useParams()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios
            .get(`http://localhost:5005/business/${resId}/reservations`)
            .then((response) => {
                setReservations(response.data.data)
                setIsLoading(false)
            })
    }, [] );

return (
    <div>
        <h1>List of Reservations</h1>
        
        {isLoading === false && reservations.map((reservation => {
            
            return <ReservationCard reservation={reservation} key={reservation._id}/>
        }))}
    </div>
)
 }