import { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

const API_URI  = process.env.REACT_APP_API_URI;

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { logInUser } = useContext(AuthContext);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };
    axios
      .post(`${API_URI}/auth/login`, requestBody)
      .then((response) => {
       
        const JWTToken = response.data.authToken;
        logInUser(JWTToken);
        props.history.push("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="loginPage__container">

      <div className="loginPage__titleContainer">
        <h1 className="loginPage__title">Hello!</h1>
      </div>

      <div className="loginPage__form">
      <form onSubmit={handleLoginSubmit}>
       
        <input type="text" placeholder="Email" name="email" value={email} onChange={handleEmail} />

        <input
        placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
      <br/>
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      </div>

      <div >
        <p>Don't have an account yet?</p>
        <Link to={"/signup"}> Sign Up</Link>
        <p>Are you a business? <img width="30px" src="/restaurant-icon.png" alt="" /></p>
        <Link to={"/business/login"}>Login In Here</Link>
      </div>

    </div>
  );
}

export default LoginPage;
