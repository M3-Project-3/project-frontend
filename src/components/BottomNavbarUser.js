import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT

export default function BottomNavbarUser(props) {

    const {
        isLoading,
        user,
        isLoggedIn,

    } = useContext(AuthContext);

    return (

        <div className='bottomNavbar__mainContainer'>



            <div className="bottomNavbar__textIconContainer">

                {isLoggedIn ?
                    <Link to="/">
                        <img className="bottomNavbar__icon" src="/magnifyingGlass.png" alt="" />
                    </Link>
                    :
                    <Link to="/">
                        <img className="bottomNavbar__icon" src="/magnifyingGlass.png" alt="" />
                    </Link>
                   
                }
            </div>
            <div className="bottomNavbar__textIconContainer">

                {isLoggedIn ?
                    <Link to={`/${user._id}/reservations`}>
                        <img className="bottomNavbar__icon" src="/reservation.png" alt="" />
                    </Link>
                    :
                    <Link to="/login">
                        <img className="bottomNavbar__icon" src="/reservation.png" alt="" />

                    </Link>
                }
            </div>
            <div className="bottomNavbar__textIconContainer">

                {isLoggedIn ?
                    <Link to={`/${user._id}/favourites`}>
                        <img className="bottomNavbar__favIcon" src="/bookmark.png" alt="" />
                    </Link>
                    :
                    <Link to="/login">
                        <img  className="bottomNavbar__favIcon" src="/bookmark.png" alt="" />

                    </Link>
                }
            </div>
            <div className="bottomNavbar__textIconContainer">

                {isLoggedIn ?
                    <div className="bottomNavbar__textIconContainer">
                        <Link to={`/${user._id}/profile`}>
                            <img className="bottomNavbar__profileIcon" src="/userProfile.png" alt="" />
                        </Link>
                    </div>
                    :
                    <Link to="/login">
                        <img className="bottomNavbar__profileIcon" src="/userProfile.png" alt="" />

                    </Link>
                }
            </div>

        </div>
    )
}