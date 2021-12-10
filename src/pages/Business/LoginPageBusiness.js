import { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

const API_URI = process.env.REACT_APP_API_URI;

function LoginPageBusiness(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const { logInBusiness } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${API_URI}/auth/business/login`, requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);

        const JWTToken = response.data.authToken;
        logInBusiness(JWTToken);
        props.history.push("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="LoginPage">
      <h1>Business Login</h1>

      <form onSubmit={handleLoginSubmit}>
        <label>Email:</label>
        <input type="text" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <button type="submit">Login</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Don't have a business?</p>
      <Link to={"/user/login"}>User Log In</Link>

      <p>Don't have an account yet?</p>
      <Link to={"/business/signup"}> Sign Up</Link>
    </div>
  );
}

export default LoginPageBusiness;
