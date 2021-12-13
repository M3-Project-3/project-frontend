import React from 'react'

export default function ReservationCard(props) {
    const { reservation } = props;

    return (
    <div className="reservationCard__container">
        <p>Date: {reservation.date}</p>
        <p>Time: {reservation.hour}</p>
        <p>Guests: {reservation.people}</p>
        <div className="reservationCard__statusContainer">
            <div className="reservationCard__statusBar">
        <p>Status: {reservation.status}</p>
            </div>
        </div>
    </div>
    )
}
