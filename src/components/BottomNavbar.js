import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "../context/auth.context"; // <== IMPORT
import BottomNavbarUser from "./BottomNavbarUser";
import BottomNavbarBusiness from "./BottomNavbarBusiness";

function BottomNavbar() {
    // Subscribe to the AuthContext to gain access to
    // the values from AuthContext.Provider `value` prop
    const {
      
       isLoggedIn,

      business:businessIsLoggedIn,
    } = useContext(AuthContext);
  
    return (
        
        <>
     {isLoggedIn ? <BottomNavbarUser /> : <BottomNavbarBusiness />}
     </>
    );
  }
  
  export default BottomNavbar;