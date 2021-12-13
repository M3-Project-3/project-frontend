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
                    <button>Reservations</button>{" "}
                    </Link>

                    <Link to={`/business/${business._id}/details`}>
                    {" "}
                    <button>Profile</button>{" "}
                    </Link>
                    <Link to={`/business/${business._id}/edit`}><button>Edit profile</button></Link>
                    </>
                ) : (
                    <>
                <Link to="/signup">
                  {" "}
                  <button>Signup</button>{" "}
                </Link>
                <Link to="/login">
                  {" "}
                  <button>Login</button>{" "}
                </Link>
              </>
                )}

        </div>
    )
}