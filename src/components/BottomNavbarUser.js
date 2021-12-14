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
        <div  className='bottom-navbar'>

            {isLoading === false && isLoggedIn ? (
            <>
            <Link to="/">
                   
                    <button>search</button>
                </Link>

                <Link to={`/${user._id}/reservations`}>   
                    <button>Reservations</button>
                </Link>

                <Link to={`/${user._id}/favourites`}>
                    <button>Favourites</button>
                </Link>

                <Link to={`/${user._id}/profile`}>
                 
                    <button>Profile</button>
                </Link>

            </>
            ) : (
                <>
               <p>Thank you for visiting the page</p>
              </>
            )}

        </div>
    )
}