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
        <img className="navBar__logo" src="/Mesa-logos_transparent.png" alt="">

        </img>
        </nav> 
     
    );
  }
  
  export default Navbar;