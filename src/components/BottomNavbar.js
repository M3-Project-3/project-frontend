import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "../context/auth.context"; // <== IMPORT
import BottomNavbarUser from "./BottomNavbarUser";
import BottomNavbarBusiness from "./BottomNavbarBusiness";

const BottomNavbar = () => {
    
    const {
      businessIsLoggedIn,
      businessIsLoading,
    } = useContext(AuthContext);
  
    return (
        <>
      { (businessIsLoading === false && businessIsLoggedIn) ? (
    <>
       
      {businessIsLoggedIn &&<BottomNavbarBusiness />}

    </>
    ) : (
    <>
   <BottomNavbarUser/>
    </>
  )}
      </>
    );
  }
  
  export default BottomNavbar;

 