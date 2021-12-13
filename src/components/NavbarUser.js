import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT
import { Link } from "react-router-dom";

function NavbarUser() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const {
    isLoading,
    user,
    isLoggedIn,
    loggedInUser,
    logOutUser,
  } = useContext(AuthContext);

  return (
    <nav>
      
      {isLoading === false && isLoggedIn ? (
        <>
          
          <span>{user.name}</span>
          
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