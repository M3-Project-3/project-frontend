import SearchBar from '../../components/SearchBar'
import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import BusinessReview from '../../components/BusinessReview'
import Reservation from '../../components/Reservation';

const API_URI = process.env.REACT_APP_API_URI;

function ProfilePageBusiness(props) {


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
            .get(`http://localhost:5005/business/${id}/reservations`)
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
        axios.put(`http://localhost:5005/reservations/${id}`, { status })
            .then(res => setStatusUpdated(true))
            .catch(error => console.log(error))
    }
    const accept = (id) => {
        setStatusUpdated(false)
        const status = "accepted"
        axios.put(`http://localhost:5005/reservations/${id}`, { status })
            .then(res => setStatusUpdated(true))
            .catch(error => console.log(error))
    }

    return (
        <div className='businessProfile'>
            <h2>Hello {profile.name}</h2>

            {businessIsLoading === false &&
                <>
                    <div className='business-buttons'>
                        <Link to={`/business/${business._id}/edit`}><button>Business Edit</button> </Link>
                       
                        <button onClick={logOutBusiness}>Logout</button>
                    </div>
                    <h2>Your reviews</h2>
                    {profile.reviews && profile.reviews.length > 0 ? profile.reviews.map((singleReview) => {
                        return (
                            <>
                                <BusinessReview review={singleReview} />
                            </>
                        )
                    }) : (
                        <>
                            <p>There is no reviews yet!</p>
                        </>)
                    }

                </>
            }
        </div>
    )
}

export default ProfilePageBusiness;