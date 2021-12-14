import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "../context/auth.context"; // <== IMPORT


function Navbar() {
    // Subscribe to the AuthContext to gain access to
    // the values from AuthContext.Provider `value` prop
    const {
        isLoading,
        logOutUser,
       isLoggedIn,
    } = useContext(AuthContext);
  
    return (
        
      <nav>
      
      {isLoading === false && isLoggedIn ? (
        <>
          <button onClick={logOutUser}>Logout</button>
       
  
        </>
      ) : (
        <>
       
          <Link to="/login">
            {" "}
            <button>Login</button>{" "}
          </Link>
        </>
      )}
    </nav>
     
    );
  }
  
  export default Navbar;