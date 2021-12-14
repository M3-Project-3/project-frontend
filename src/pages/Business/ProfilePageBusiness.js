import SearchBar from '../../components/SearchBar'
import {useState, useEffect, useContext} from "react";
import axios from 'axios';
import {useParams} from "react-router-dom"
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import BusinessReview from '../../components/BusinessReview'
import Reservation from '../../components/Reservation';

const API_URI = process.env.REACT_APP_API_URI;

function ProfilePageBusiness(props) {
    

    const {
        business,
        businessIsLoggedIn,
        logInBusiness,
        logOutBusiness,
      } = useContext(AuthContext);

      const {id} = useParams()

    const [businessIsLoading, setBusinessIsLoading] = useState(true)
    const [profile, setProfile] = useState({})
    const [reservations, setReservations] = useState()
    const [pending, setPending] = useState()
    const [accepted, setAccepted] = useState()
    const [declined, setDeclined] = useState()
    const [statusUpdated, setStatusUpdated] = useState(false)

    useEffect(() => {
        axios
            .get(`http://localhost:5005/business/${id}/details`)
            .then((response) => {
                
                setProfile(response.data.data)
                setBusinessIsLoading(false)
            })
    },[] );

    useEffect(() => {
        axios
            .get(`http://localhost:5005/business/${id}/reservations`)
            .then((response) => {
                setReservations(response.data.data)
                setBusinessIsLoading(false)
            })
    }, [statusUpdated] );

    useEffect(()=>{
        if(businessIsLoading === false){
            if(reservations){
                let statusPending = reservations.filter((el)=>el.status === "pending")
                setPending(statusPending)
            }if(reservations){
                let statusAccepted = reservations.filter((el)=>el.status === "accepted")
                setAccepted(statusAccepted)
            }if(reservations){
                let statusDeclined = reservations.filter((el)=>el.status === "declined")
                setDeclined(statusDeclined)
            }
        }
         
    },[reservations])

    const decline = (id) =>{
        setStatusUpdated(false)
        const status = "declined"
        axios.put(`http://localhost:5005/reservations/${id}`, {status})
        .then(res=>setStatusUpdated(true))
        .catch(error=>console.log(error))
    }
    const accept = (id) =>{
        setStatusUpdated(false)
        const status = "accepted"
        axios.put(`http://localhost:5005/reservations/${id}`, {status})
        .then(res=>setStatusUpdated(true))
        .catch(error=>console.log(error))
    }

return (
    <div>
        <h2>Profile</h2>

        {businessIsLoading === false && 
            <>
                <h2>Reservations</h2>
                <h3>Reservations pending</h3>
                {pending && pending.length > 0 ? pending.map((el)=>{
                   return (
                        <>
                       <Reservation reservation={el}/>
                        <button onClick={()=>accept(el._id)}>Accept</button>
                        <button onClick={()=>decline(el._id)}>Decline</button> 
                       </>
                   )
                }) : <span>There are no new reservations</span>
                }
                <h3>Reservations accepted</h3>
                {accepted && accepted.length > 0 ? accepted.map((el)=>{
                   return ( 
                       <Reservation reservation={el}/>
                   )
                }) : <span>No reservations accepted</span>
                }
                <h3>Reservations declined</h3>
                {declined && declined.length > 0 ? declined.map((el)=>{
                   return (   
                       <Reservation reservation={el}/>
                   )
                }) : <span>No reservations declined</span>
                }
                
            </>
        }
        {businessIsLoading === false &&     
            <>
                <h2>Reviews</h2>
                {profile.reviews.length > 0 ? profile.reviews.map((singleReview)=>{
                    return (
                        <>  
                            <BusinessReview review={singleReview} />
                        </>
                    )
                }):(
                    <>             
                        <p>There is no reviews yet!</p>
                    </>)
                }
                <div>
                    <div> <Link to={`/business/${business._id}/edit`}><button>Business Edit</button> </Link></div>
                    <button onClick={logOutBusiness}>Logout</button>
                </div>
            </>
        }     
    </div>
)}

export default ProfilePageBusiness;