import React from 'react'

const ReservationCard = (props) => {
    const { reservation } = props;
    

    return (
    <div className="reservationCard__container">
        <div className="reservationCard__ImgContainer">
            <img className="reservationCard__reservationImg" src="/reservation.png" alt=''></img>
        <p className="reservationCard__date">{reservation.date}</p>
        </div>

            <div className="reservationCard__ImgContainer">
                <img className="reservationCard__reservationImg" src="/time.png" alt=''></img>
                <p className="reservationCard__hour">{reservation.hour}</p>
            </div>

        <div className="reservationCard__ImgContainer">
        <img className="reservationCard__reservationImg" src="/people.png" alt=''></img>
        <p className="reservationCard__people">{reservation.people}</p>
        </div>
        <div className="reservationCard__statusContainer">
            
            <div className="reservationCard__statusBar">
            
            </div>
        </div>
    </div>
    )
}

export default ReservationCard
