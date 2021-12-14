import SearchBar from '../../components/SearchBar'
import {useState, useEffect, useContext} from "react";
import axios from 'axios';
import {useParams} from "react-router-dom"
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";


const API_URI = process.env.REACT_APP_API_URI;

function ProfilePage(props) {

    const {
        user,
        isLoggedIn,
        loggedInUser,
        logOutUser,
      } = useContext(AuthContext);


    const {id} = useParams()
    
    const [isLoading, setIsLoading] = useState(true)
    const [profile, setProfile] = useState({})
    

    useEffect(() => {
        axios
            .get(`http://localhost:5005/user/${id}`)
            .then((response) => {
               
                setProfile(response.data)
                setIsLoading(false)
            })
    }, [] );

return (
    <div>
        <h2>Profile</h2>
       
        {isLoading === false &&
                <div>
                    <img src={profile.picture} alt={profile.name} height="200px"></img>
                    <div>
                        <div>Name: {profile.name} {profile.surename} </div>
                        <div>{profile.email}</div>
                        <div>{profile.favourites}</div>
                        <div> <Link to={`/user/${profile._id}/edit`}><button>User Edit</button> </Link></div>
                        <button onClick={logOutUser}>Logout</button>
                    </div>
                </div>
            }
        
    </div>
)
}


export default ProfilePage;