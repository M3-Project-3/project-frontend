export default function Reservation(props){
    const {status, date, hour, people, name, surname, businessId} = props.reservation
    const reservationDate= date.slice(0,10).split("-")
    const day = reservationDate[2]
    const month = reservationDate[1]
    const year = reservationDate[0]
    const finalDate = `${day} ${month} ${year}`
    

    return (
        <div className="reservationCard">
            <div>
                
                <span>Restaurant: {businessId.name}</span>
                <br></br>
                <span>Address: {businessId.address}</span>
                <br></br>
                <span>Date: {finalDate} at {hour}</span>
                <br></br>
                <span>Number of persons: {people}</span>
            </div>
        </div>
    )
}