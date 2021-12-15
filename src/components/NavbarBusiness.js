import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT

const NavbarBusiness = () => {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const {

    businessIsLoggedIn,
    businessIsLoading,

    logOutBusiness,
  } = useContext(AuthContext);
  return (
    <nav>

      {businessIsLoading === false && businessIsLoggedIn ? (
        <>
          <button onClick={logOutBusiness}>Logout</button>
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

export default NavbarBusiness;
