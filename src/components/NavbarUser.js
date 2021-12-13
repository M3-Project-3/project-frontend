import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT

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
      <Link to="/">
        <button>Home</button>
      </Link>
      
      {isLoading === false && isLoggedIn ? (
        <>
          <button onClick={logOutUser}>Logout</button>
          <span>Hi {user.name} !</span>
          <br/>
          <Link to={`/user/${user._id}/edit`}>User Edit</Link>
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