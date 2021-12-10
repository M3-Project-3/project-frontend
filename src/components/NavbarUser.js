import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT

function NavbarUser() {
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
          <Link to={`/user/${loggedInUser._id}/edit`}>User Edit</Link>
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