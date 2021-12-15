import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import Reservation from '../../components/Reservation';


const API_URI = process.env.REACT_APP_API_URI;

const ProfilePage = (props) => {

    const { user, logOutUser } = useContext(AuthContext);
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [profile, setProfile] = useState({})
    const [reservations, setReservations] = useState()
    const [pending, setPending] = useState()
    const [accepted, setAccepted] = useState()
    const [declined, setDeclined] = useState()


    useEffect(() => {
        const userProfile = async () => {
            const getProfile = await axios.get(`${API_URI}/user/${id}`)
            setIsLoading(false)
        }
        userProfile()
    }, []);

    useEffect(() => {
        const getUserReservations = async () => {
            const reservations = await axios.get(`http://localhost:5005/user/${id}/reservations`)
            setReservations(reservations.data.data)
            setIsLoading(false)
        }
        getUserReservations()
    }, [] );

    useEffect(() => {
        if (isLoading === false) {
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

    return (
        <div>


            {isLoading === false &&
                <>
                    <div className="profileContainer">
                        <h2>Welcome {profile.name}!</h2>
                        <div className="profile-info">
                            <h3> Profile information</h3>
                            <span> <strong>Name:</strong>  {profile.name} </span>
                            <span><strong>Surname:</strong>  {profile.surname} </span>
                            <span><strong>Email:</strong> {profile.email}</span>


                        </div>

                        <div className="profileReservations">
                            <h3> Your Reservations</h3>
                            <div className="reservationsList" >

                                <h4 id="pending">Pending reservations:</h4>

                                {pending && pending.length > 0 ? pending.map(el => {
                                    console.log(el)
                                    return <Reservation reservation={el} />
                                }) : <span>No pending reservations</span>
                                }

                                <h4 id="accepted">Accepted reservations:</h4>
                                {accepted && accepted.length > 0 ? accepted.map(el => {
                                    return <Reservation reservation={el} />
                                }) : <span>No accepted reservations</span>
                                }

                                <h4 id="declined">Declined reservations:</h4>
                                {declined && declined.length > 0 ? declined.map(el => {
                                    return <Reservation reservation={el} />
                                }) : <span>No declined reservations</span>
                                }
                            </div>
                        </div>

                        <div className="profile-buttons">
                            <Link to={`/${profile._id}/profile/edit`}><button>Update profile</button> </Link>
                            <button onClick={logOutUser}>Logout</button>
                        </div>
                    </div>

                </>
            }

        </div>
    )
}
export default ProfilePage;