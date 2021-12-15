const Reservation = (props) => {
    const {status, date, hour, people, name, surname, businessId} = props.reservation
    const reservationDate= date.slice(0,10).split("-")
    const day = reservationDate[2]
    const month = reservationDate[1]
    const year = reservationDate[0]
    const finalDate = `${day} ${month} ${year}`
    

    return (
        <div className="reservationCard">
            <div>
                
                <p> <strong> Restaurant:</strong> {businessId.name}</p>
                <br/>
                <p><strong> Address:</strong>  {businessId.address}</p>
                <br/>
                <p><strong> Date:</strong> {finalDate} at {hour}</p>
                <br/>
                <p><strong> Nº of people:</strong> {people}</p>
            </div>
        </div>
    )
}

export default Reservation