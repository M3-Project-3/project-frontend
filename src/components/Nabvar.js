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
      
      {(isLoading === false && isLoggedIn) || (businessIsLoading === false && businessIsLoggedIn) ? (
        <>
          <button onClick={logOutUser || logOutBusiness}>Logout</button>
       
  
        </>
      ) : (
        <>
       
          
          <div>
            <Link to="/login" className="navBar__logInButton">Login</Link>{" "}
          </div>

        </>
      )}
    </nav>
     
    );
  }
  
  export default Navbar;