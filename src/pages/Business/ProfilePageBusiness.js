import SearchBar from '../../components/SearchBar'
import {useState, useEffect, useContext} from "react";
import axios from 'axios';
import {useParams} from "react-router-dom"
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

const API_URI = process.env.FRONTEND_DOMAIN;

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

    useEffect(() => {
        axios
            .get(`${API_URI}/business/${id}/details`)
            .then((response) => {
                
                setProfile(response.data.data)
                setBusinessIsLoading(false)
            })
    }, [] );

return (
    <div>
        <h2>Profile</h2>
        
        {businessIsLoading === false &&
                
                    <div>
                        
                        <div> <Link to={`/business/${business._id}/edit`}><button>Business Edit</button> </Link></div>
                        <button onClick={logOutBusiness}>Logout</button>
                
                </div>
            }
        
    </div>
)
}

export default ProfilePageBusiness;