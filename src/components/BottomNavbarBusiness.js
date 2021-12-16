import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT

const BottomNavbarBusiness = (props) => {


    const {
        business,
        businessIsLoggedIn,
        businessIsLoading,

    } = useContext(AuthContext);


    return (

        <div className='businessBottomNav'>
            <div>

                {businessIsLoading === false && businessIsLoggedIn &&

                    <Link className="login" to={`/business/${business._id}/reservations`}>

                        <img className="bottomNavbar__icon" src="/reservation.png" alt="" />
                    </Link>


                }
                </div>
                <div>
                {businessIsLoading === false && businessIsLoggedIn &&

                    <Link to={`/${business._id}/businessProfile`}>

                        <img className="bottomNavbar__profileIcon" src="/userProfile.png" alt="" />
                    </Link>

                }
                </div>
         
        </div>
    )
}

export default BottomNavbarBusiness