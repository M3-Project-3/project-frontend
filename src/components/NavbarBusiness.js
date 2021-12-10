import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT

function NavbarBusiness() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const {
    businessIsLoggedIn,
    user: logInBusiness,
    logOutBusiness,
  } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      -
      {businessIsLoggedIn ? (
        <>
          <button onClick={logOutBusiness}>Logout</button>
          <span>{logInBusiness.name}</span>
          <Link to={`/business/${logInBusiness._id}/edit`}>Business Edit</Link>
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

export default NavbarBusiness;
