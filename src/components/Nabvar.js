import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "../context/auth.context"; // <== IMPORT
import NavbarUser from "./NavbarUser";
import NavbarBusiness from "./NavbarBusiness";

function Navbar() {
    // Subscribe to the AuthContext to gain access to
    // the values from AuthContext.Provider `value` prop
    const {
      
       isLoggedIn,

      business:businessIsLoggedIn,
    } = useContext(AuthContext);
  
    return (
        
    <div>
      {isLoggedIn ? <NavbarUser /> : <NavbarBusiness />}
    </div>
     
    );
  }
  
  export default Navbar;