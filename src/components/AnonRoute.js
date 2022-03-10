import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";
import { Redirect, Route } from "react-router-dom";

const AnonRoute = (props) => {
  const { to, exact, Component, ...restProps } = props;

  const { isLoggedIn } = useContext(AuthContext);
  
  return <Route to={to} exact={exact} {...restProps} render={props => (isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />)} />;
}

export default AnonRoute;
