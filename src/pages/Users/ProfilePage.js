import {useState, useEffect, useContext} from "react";
import axios from 'axios';
import {useParams} from "react-router-dom"
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import Reservation from '../../components/Reservation';


const API_URI = process.env.REACT_APP_API_URI;

function ProfilePage(props) {

    const {user, logOutUser } = useContext(AuthContext);
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [profile, setProfile] = useState({})
    const [reservations, setReservations] = useState()
    const [pending, setPending] = useState()
    const [accepted, setAccepted] = useState()
    const [declined, setDeclined] = useState()
    
    
    useEffect(() => {
        axios
            .get(`${API_URI}/user/${id}`)
            .then((response) => {
                setIsLoading(false)
                setProfile(response.data)
            })
    }, [] );

    useEffect(() => {
        axios
            .get(`http://localhost:5005/user/${id}/reservations`)
            .then((response) => {
                setReservations(response.data.data)
                setIsLoading(false)
            })
    }, [] );

    useEffect(()=>{
        if(isLoading === false){
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

return (
    <div>
        

        {isLoading === false &&
        <>
            <div>
            <h2>Welcome {profile.name}!</h2>
                <div className="profile-info">
                    <span>Name: {profile.name} </span>
                    <span>Surname: {profile.surname} </span>
                    <span>{profile.email}</span>
                    <div>{profile.favourites}</div>
                    <div> <Link to={`/${profile._id}/profile/edit`}><button>User Edit</button> </Link></div>
                    <button onClick={logOutUser}>Logout</button>
                </div>
            </div>
            <div>
                <span>Pending reservations</span>
                {pending && pending.length > 0 ? pending.map(el=>{
                    console.log(el)
                    return <Reservation reservation={el}/>
                }): <span>No pending reservations</span>
                }
            </div>
            <div>
                <span>Accepted reservations</span>
                {accepted && accepted.length > 0 ? accepted.map(el=>{
                    return <Reservation reservation={el}/>
                }):<span>No accepted reservations</span>
                }
            </div>
            <div>
                <span>Declined reservations</span>
                {declined && declined.length > 0 ? declined.map(el=>{
                   return <Reservation reservation={el}/>
                }): <span>No declined reservations</span>
                }
            </div>
            
        </>
        }
        
    </div>
)
}
export default ProfilePage;