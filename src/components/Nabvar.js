import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "../context/auth.context"; // <== IMPORT
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    // Subscribe to the AuthContext to gain access to
    // the values from AuthContext.Provider `value` prop
    const {
    } = useContext(AuthContext);
  
    return (
        
      <nav>
        <NavLink to="/" className="navBar__logo">
          <a href="" className="navBar__logoLink" />
            <img className="navBar__img" src="/logo.png" alt="">
            </img>
          </NavLink>
        </nav>
     
    );
  }
  
  export default Navbar;