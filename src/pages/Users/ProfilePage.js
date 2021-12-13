import SearchBar from '../../components/SearchBar'
import {useState} from "react";
import axios from 'axios';
import {useParams} from "react-router-dom"

const API_URI = process.env.REACT_APP_API_URI;

function ProfilePage(props) {
    const {id} = useParams().id

    const [isLoading, setIsLoading] = useState(true)
    const [profile, setProfile] = useState({})

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
                    </div>
                </div>
            }
        
    </div>
)
}


export default ProfilePage;