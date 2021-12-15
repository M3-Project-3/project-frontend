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
    

        const JWTToken = response.data.authTokenBusiness;
        logInBusiness(JWTToken);
        props.history.push("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <>
  
  <div className="loginPageBusiness__container">
      <div className="loginPage__titleContainer">
        <h1 className="loginPage__title">Business Login</h1>
      </div>
      <div className="loginPageBusiness__form"> 
      <form onSubmit={handleLoginSubmit}>
     
        <input placeholder="Email" required type="text" name="email" value={email} onChange={handleEmail} />

       
        <input
        required
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

      <div>
        <p>Don't have an account yet?</p>
        <Link to={"/business/signup"}> Sign Up</Link>

        <p>Don't have a business?</p>
        <Link to={"/login"}>Login as customer</Link>

      </div>
    </div>
    </>
  );
}

export default LoginPageBusiness;
