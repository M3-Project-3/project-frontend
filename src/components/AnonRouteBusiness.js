import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";
import { Redirect, Route } from "react-router-dom";

const AnonRouteBusiness = (props) => {
  const { to, exact, Component, ...restProps } = props;

  const { businessIsLoggedIn } = useContext(AuthContext);

  return <Route to={to} exact={exact} {...restProps} render={props => (businessIsLoggedIn ? <Component {...props} /> : <Redirect to="/business/login" />)} />;
}

export default AnonRouteBusiness;
