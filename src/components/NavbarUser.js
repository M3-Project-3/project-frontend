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
      

    
    </nav>
  );
}

export default NavbarUser;