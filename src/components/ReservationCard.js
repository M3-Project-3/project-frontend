import React from 'react'

export default function ReservationCard(props) {
    const { reservation } = props;
    console.log('dssdasddassda',reservation.date)
    return (
    <div className="reservation-card">
        <p>Date: {reservation.date}</p>
        <p>Time: {reservation.hour}</p>
        <p>Guests: {reservation.people}</p>
        <p>Status: {reservation.status}</p>
    </div>
    )
}
