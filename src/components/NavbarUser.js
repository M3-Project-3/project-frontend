import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT
import { Link } from "react-router-dom";

const NavbarUser = () => {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const {
    isLoading,
    isLoggedIn,
    logOutUser,
  } = useContext(AuthContext);

  return (
    <nav>
      
      {isLoading === false && isLoggedIn ? (
        <>
          <button onClick={logOutUser}>Logout</button>
       
  
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
    </nav>
  );
}

export default NavbarUser;