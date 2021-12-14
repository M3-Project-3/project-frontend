import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT

export default function BottomNavbarBusiness(props){


    const {
        business,
        businessIsLoggedIn,
        businessIsLoading,
        logInBusiness,
        
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

                    <Link to={`/${business._id}/businessProfile`}>
                    {" "}
                    <img className="bottomNavbar__icon" src="userProfile.png" alt=""/>
                    <p className="bottomNavbar__text">Profile</p>{" "}
                    </Link>
                    {/* <Link to={`/business/${business._id}/edit`}><button>Edit profile</button></Link> */}
                    </>
                ) : (
                    <>
              </>
                )}

        </div>
    )
}