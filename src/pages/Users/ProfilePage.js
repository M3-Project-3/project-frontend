import {useState, useEffect, useContext} from "react";
import axios from 'axios';
import {useParams} from "react-router-dom"
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";


const API_URI = process.env.REACT_APP_API_URI;

function ProfilePage(props) {

    const {user, logOutUser } = useContext(AuthContext);
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        axios
            .get(`${API_URI}/user/${id}`)
            .then((response) => {
                setIsLoading(false)
            })
    }, [] );

return (
    <div>
        <h2>Profile</h2>
       
        {isLoading === false &&
                <div>
                    <img src={user.picture} alt={user.name} height="200px"></img>
                    <div>
                        <div>Name: {user.name} {user.surname} </div>
                        <div>{user.email}</div>
                        <div>{user.favourites}</div>
                        <div> <Link to={`/user/${user._id}/edit`}><button>User Edit</button> </Link></div>
                        <button onClick={logOutUser}>Logout</button>
                    </div>
                </div>
            }
        
    </div>
)
}


export default ProfilePage;