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
        <div  className='bottomNav__businessContainer'>
                {businessIsLoading === false && businessIsLoggedIn ? (
                    <>
                    <div className="bottomNavbar__textIconContainer">
                    <Link to={`/business/${business._id}/reservations`}>
                    {" "}
                    <img className="bottomNavbar__icon" src="reservation.png" alt=""/>
                    <p className="bottomNavbar__text" >Reservations</p>{" "}
                    </Link>
                    </div>

                    <div className="bottomNavbar__textIconContainer">
                    <Link to={`/business/${business._id}/details`}>
                    {" "}
                    <img className="bottomNavbar__icon" src="userProfile.png" alt=""/>
                    <p className="bottomNavbar__text">Profile</p>{" "}
                    </Link>
                    </div>
                    </>
                ) : (
                    <>
                    <p className="bottomNavbar__text">Created by Ironhackers</p>
                 </>
                )}

        </div>
    )
}