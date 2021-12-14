import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT

export default function BottomNavbarUser(props){

    const {
        isLoading,
        user,
        isLoggedIn,
        loggedInUser,
        logOutUser,
      } = useContext(AuthContext);


        
    return(
        <div  className='bottomNavbar__mainContainer'>

            {isLoading === false && isLoggedIn ? (
            
            <div className="bottomNavbar__textIconContainer">
            
            <div className="bottomNavbar__iconTextContainer">
                <Link to="/">
                    {/* <img className="bottomNavbar__icon" src="magnifyingGlass.png"/> */}
                    <p className="bottomNavbar__text">Search</p>
                </Link>
            </div>
        
            <Link to={`/${user._id}/reservations`}>   
                <p className="bottomNavbar__text">Reservations</p>
            </Link>

            <Link to={`/${user._id}/favourites`}>
                <p className="bottomNavbar__text">Favourites</p>
            </Link>

            <Link to={`/${user._id}`}>
                <p className="bottomNavbar__text">Profile</p>
            </Link>

            </div>

            ) : (<p>Created by Ironhackers</p>)
            }
        </div>
    )
}