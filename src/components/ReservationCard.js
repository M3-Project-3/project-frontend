import React from 'react'

const ReservationCard = (props) => {
    const { reservation } = props;
    console.log(reservation.businessId.name)


    return (
        <div className="reservationCard__container">
            <div className="reservationCard__ImgContainer">
                <p className="reservationCard__date"> <strong>{reservation.businessId.name}</strong> </p>
            </div>
            <div className="reservationCard__ImgContainer">
                <img className="reservationCard__reservationImg" src="/pin.png" alt=''></img>
                <p className="reservationCard__date">{reservation.businessId.address}</p>
            </div>
            <div className="reservationCard__ImgContainer">
                <img className="reservationCard__reservationImg" src="/reservation.png" alt=''></img>
                <p className="reservationCard__date">{reservation.date.slice(0, 10)}</p>
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
                    <p>Status: {reservation.status}</p>

                </div>
            </div>
        </div>
    )
}

export default ReservationCard
