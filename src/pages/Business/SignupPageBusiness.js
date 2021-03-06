import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URI = process.env.REACT_APP_API_URI;


const SignupPageBusiness = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, name };
    
    axios
      .post(`${API_URI}/auth/business/signup`, requestBody)
      .then((response) => props.history.push("/login"))
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <>
    <div className="SignupPage">
      <h1> Business Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
       
        <input required placeholder="Business name" type="text" name="name" value={name} onChange={handleName} />
        
        <input required placeholder="Email address" type="text" name="email" value={email} onChange={handleEmail} />

        <input
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

       <div  className="businessButton">
        <button type="submit">Sign Up</button>
        </div>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Don't have a business?</p>
      <Link to={"/signup"}>User sign up</Link>
      
      <p>Already have account?</p>
      <Link to={"/business/login"}> Login</Link>
    </div>
    </>
  );
}

export default SignupPageBusiness;
