import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const {
    isLoggedIn,
    user: loggedInUser,
    logOutUser,
  } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      -
      {isLoggedIn ? (
        <>
          <button onClick={logOutUser}>Logout</button>
          <span>{loggedInUser.name}</span>
          <Link to={`/business/${loggedInUser._id}/edit`}>Business Edit</Link>
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

export default Navbar;
