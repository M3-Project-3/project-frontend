import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT

export default function BottomNavbarBusiness(props){


    const {
        business,
        businessIsLoggedIn,
        businessIsLoading,
        logInBusiness,
        logOutBusiness,
      } = useContext(AuthContext);

        
    return(
        <div  className='bottom-navbar'>
                {businessIsLoading === false && businessIsLoggedIn ? (
                    <>
                    <Link to={`/business/${business._id}/reservations`}>
                    {" "}
                    <p className="bottomNavbar__text" >Reservations</p>{" "}
                    </Link>

                    <Link to={`/business/${business._id}/details`}>
                    {" "}
                    <p className="bottomNavbar__text">Profile</p>{" "}
                    </Link>
                    </>
                ) : (
                    <>
                    <p className="bottomNavbar__text">Created by Ironhackers</p>
                 </>
                )}

        </div>
    )
}