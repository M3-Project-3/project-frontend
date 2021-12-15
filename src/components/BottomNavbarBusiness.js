import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT

export default function BottomNavbarBusiness(props){


    const {
        business,
        businessIsLoggedIn,
        businessIsLoading,
        
      } = useContext(AuthContext);

        
    return(
        
        <div  className='bottom-navbar'>
                {businessIsLoading === false && businessIsLoggedIn &&
                    <>
                    
                    <Link className="login" to={`/business/${business._id}/reservations`}>
                    {" "}
                    <p className="bottomNavbar__text" >Reservations</p>{" "}
                    </Link>

                    <Link to={`/${business._id}/businessProfile`}>
                    {" "}
                    <p className="bottomNavbar__text">Profile</p>{" "}
                    </Link>
                    <Link to={`/business/${business._id}/edit`}><button>Edit profile</button></Link>
                    </>
                

            }

        </div>
    )
}