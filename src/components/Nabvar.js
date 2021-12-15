import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "../context/auth.context"; // <== IMPORT
import { Link } from "react-router-dom";

function Navbar() {
    // Subscribe to the AuthContext to gain access to
    // the values from AuthContext.Provider `value` prop
    const {
        isLoading,
        logOutUser,
       isLoggedIn,
       logOutBusiness,
        businessIsLoggedIn,
        businessIsLoading,
    } = useContext(AuthContext);
  
    return (
        
      <nav>
        <img className="navBar__logo" src="/Mesa-logos_transparent.png">

        </img>
        </nav>
      
      /* {(isLoading === false && isLoggedIn) || (businessIsLoading === false && businessIsLoggedIn) ? (
        <>
          <button onClick={logOutUser || logOutBusiness}>Logout</button>
       
  
        </>
      ) : (
        <>
          <Link to="/login" className="navBar__logInButton">
            {" "}
            <Link>Login</Link>{" "}
          </Link>
        </>
      )} */
   
     
    );
  }
  
  export default Navbar;