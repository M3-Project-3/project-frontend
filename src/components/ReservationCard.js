import React from 'react'

export default function ReservationCard(props) {
    const { reservation } = props;
    console.log("--------------z",reservation)

    return (
    <div className="reservationCard__container">
        <p>Date: {reservation.date}</p>
        <p>Time: {reservation.hour}</p>
        <p>Guests: {reservation.people}</p>
        <p>Status: {reservation.status}</p>
    </div>
    )
}
