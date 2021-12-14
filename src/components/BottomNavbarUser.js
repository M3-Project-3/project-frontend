import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT

export default function BottomNavbarUser(props){

    const {
        isLoading,
        user,
        isLoggedIn,

      } = useContext(AuthContext);
        
    return(
        
        <div  className='bottomNavbar__mainContainer'>

            {isLoading === false && isLoggedIn ? (
            
            <div className="bottomNavbar__textIconContainer">
            <div>
                <Link to="/">
                    {/* <img className="bottomNavbar__icon" src="magnifyingGlass.png" alt=""/> */}
                    <p className="bottomNavbar__text">Search</p>
                </Link>
            </div>
                
            <div className="bottomNavbar__textIconContainer">
            <Link to={`/${user._id}/reservations`}>   
            {/* <img className="bottomNavbar__icon" src="reservation.png" alt=""/> */}
                <p className="bottomNavbar__text">Reservations</p>
            </Link>
            </div>
            
            <div className="bottomNavbar__textIconContainer">
            <Link to={`/${user._id}/favourites`}>
            {/* <img className="bottomNavbar__favIcon" src="bookmark.png" alt=""/> */}
                <p className="bottomNavbar__text">Favourites</p>
            </Link>
            </div>

            <div className="bottomNavbar__textIconContainer">
            <Link to={`/${user._id}/profile`}>
            {/* <img className="bottomNavbar__profileIcon" src="userProfile.png" alt=""/> */}
                <p className="bottomNavbar__text">Profile</p>
            </Link>
            </div>

            </div>

            ) : (<p>Created by Ironhackers</p>)
            }
        </div>
    )
}