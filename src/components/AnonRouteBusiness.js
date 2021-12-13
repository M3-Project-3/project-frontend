import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";
import { Redirect, Route } from "react-router-dom";

function AnonRouteBusiness(props) {
  const { to, exact, Component, ...restProps } = props;

  const { businessIsLoggedIn, businessIsLoading } = useContext(AuthContext);

  // If the authentication is still loading ⏳
  // if (isLoading) return <p>Loading ...</p>;

  // If the user is already logged in, redirect him to home page
  // if (isLoggedIn) return <Redirect to="/" />;

  // If the user is not logged in yet, allow him to see the page
  return <Route to={to} exact={exact} {...restProps} render={props => (businessIsLoggedIn ? <Component {...props} /> : <Redirect to="/business/login" />)} />;
}

export default AnonRouteBusiness;
