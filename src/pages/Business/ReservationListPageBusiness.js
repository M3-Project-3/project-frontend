import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import BusinessReview from '../../components/BusinessReview'
import Reservation from '../../components/Reservation';

const API_URI = process.env.REACT_APP_API_URI;

 export default function ReservationListPageBusiness() {
 
    const {
        business,
        logOutBusiness,
    } = useContext(AuthContext);

    const { id } = useParams()

    const [businessIsLoading, setBusinessIsLoading] = useState(true)
    const [profile, setProfile] = useState({})
    const [reservations, setReservations] = useState()
    const [pending, setPending] = useState()
    const [accepted, setAccepted] = useState()
    const [declined, setDeclined] = useState()
    const [statusUpdated, setStatusUpdated] = useState(false)

    useEffect(() => {
        axios
            .get(`${API_URI}/business/${id}/details`)
            .then((response) => {

                setProfile(response.data.data)
                setBusinessIsLoading(false)
            })
    }, []);

    useEffect(() => {
        axios
            .get(`${API_URI}/business/${id}/reservations`)
            .then((response) => {
                setReservations(response.data.data)
                setBusinessIsLoading(false)
            })
    }, [statusUpdated]);

    useEffect(() => {
        if (businessIsLoading === false) {
            if (reservations) {
                let statusPending = reservations.filter((el) => el.status === "pending")
                setPending(statusPending)
            } if (reservations) {
                let statusAccepted = reservations.filter((el) => el.status === "accepted")
                setAccepted(statusAccepted)
            } if (reservations) {
                let statusDeclined = reservations.filter((el) => el.status === "declined")
                setDeclined(statusDeclined)
            }
        }

    }, [reservations])

    const decline = (id) => {
        setStatusUpdated(false)
        const status = "declined"
        axios.put(`${API_URI}/reservations/${id}`, { status })
            .then(res => setStatusUpdated(true))
            .catch(error => (error))
    }
    const accept = (id) => {
        setStatusUpdated(false)
        const status = "accepted"
        axios.put(`${API_URI}/reservations/${id}`, { status })
            .then(res => setStatusUpdated(true))
            .catch(error => (error))
    }

    return (
        <div className='businessProfile'>
            <h2>Hello {profile.name}</h2>

            {businessIsLoading === false &&
                <>
                    <div className="profileReservations">
                        <div className="reservationsList" >
                            <h4 id="pending">Pending reservations</h4>
                            {pending && pending.length > 0 ? pending.map((el) => {
                                return (
                                    <>
                                    <Reservation reservation={el} profile="business"/>
                                        <div className="reservationButtons">
                                            <button className="accept-button" onClick={() => accept(el._id)}>Accept</button>
                                            <button className="decline-button" onClick={() => decline(el._id)}>Decline</button>
                                        </div>
                                    </>
                                )
                            }) : <span>There are no new reservations</span>
                            }
                            <h4 id="accepted">Accepted reservations</h4>
                            {accepted && accepted.length > 0 ? accepted.map((el) => {
                                return (
                                    <Reservation reservation={el} profile="business"/>
                                )
                            }) : <span>No reservations accepted</span>
                            }
                            <h4 id="declined">Declined reservations</h4>
                            {declined && declined.length > 0 ? declined.map((el) => {
                                return (
                                    <Reservation reservation={el} profile="business"/>
                                )
                            }) : <span>No reservations declined</span>
                            }
                        </div>
                    </div>
                </>
            }
        </div>
    )
 }
