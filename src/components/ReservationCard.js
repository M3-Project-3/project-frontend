import React from 'react'

export default function ReservationCard(props) {
    const { reservation } = props;
    console.log("--------------z",reservation)

    return (
    <div className="reservationCard__container">
        <div className="reservationCard__ImgContainer">
            <img className="reservationCard__reservationImg" src="/reservation.png"></img>
        <p className="reservationCard__date">{reservation.date}</p>
        </div>

            <div className="reservationCard__ImgContainer">
                <img className="reservationCard__reservationImg" src="/time.png"></img>
                <p className="reservationCard__hour">{reservation.hour}</p>
            </div>

        <div className="reservationCard__ImgContainer">
        <img className="reservationCard__reservationImg" src="/people.png"></img>
        <p className="reservationCard__people">{reservation.people}</p>
        </div>
        <div className="reservationCard__statusContainer">
            
            <div className="reservationCard__statusBar">
            
            </div>
        </div>
    </div>
    )
}
