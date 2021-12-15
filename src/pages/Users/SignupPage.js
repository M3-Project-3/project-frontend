import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URI = process.env.REACT_APP_API_URI;


const SignupPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);


  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleSurname = (e) => setSurname(e.target.value);


  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name, surname };
    
    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    axios
      .post(`${API_URI}/auth/signup`, requestBody)
      .then((response) => props.history.push("/login"))
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="SignupPage">
      <h1>Sign Up</h1>
      <div className="SignForm">

      <form onSubmit={handleSignupSubmit}>
        
        <input required placeholder="Name" type="text" name="name" value={name} onChange={handleName} />

    
        <input required placeholder="Surname" type="text" name="surname" value={surname} onChange={handleSurname} />


        <input required placeholder="Email address" type="text" name="email" value={email} onChange={handleEmail} />

  
        <input
          placeholder="Choose password..."
          required
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        <br/>

        <button type="submit">Sign Up</button>
      </form>
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p className="login-text">Already have account?</p>
      <Link to={"/login"}> Login</Link>

      <p> Are you a business? <img width="30px" src="/restaurant-icon.png" alt="" /></p>
      <Link className="signup-text" to={"/business/signup"}>Sign Up Here</Link>

      
    </div>
  );
}

export default SignupPage;
