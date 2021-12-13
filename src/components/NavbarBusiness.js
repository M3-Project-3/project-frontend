import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT

function NavbarBusiness() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const {
    business,
    businessIsLoggedIn,
    businessIsLoading,
    logInBusiness,
    logOutBusiness,
  } = useContext(AuthContext);
  return (
    <nav>

    </nav>
  );
}

export default NavbarBusiness;
