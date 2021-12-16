import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const API_URI = process.env.REACT_APP_API_URI;

const AuthContext = React.createContext();

const AuthProviderWrapper = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [businessIsLoggedIn, businessSetIsLoggedIn] = useState(false);
  const [businessIsLoading, businessSetIsLoading] = useState(true);
  const [business, setBusiness] = useState(null);
  const history = useHistory();
  
  const verifyToken = () => {
    const localJWTToken = localStorage.getItem("authToken");

    if (localJWTToken) {
      axios
        .get(`${API_URI}/auth/verify`, {
          headers: { Authorization: `Bearer ${localJWTToken}` },
        })
        .then((response) => {
          const userJWT = response.data;
          setUser(userJWT); // this is essential to create the context for auth
          setIsLoading(false);
          setIsLoggedIn(true);
        })
        .catch((error) => {
          setUser(null);
          setIsLoggedIn(false);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  };

  const logInUser = (JWTToken) => {
    localStorage.setItem("authToken", JWTToken);
    verifyToken(); 
  };

  const logOutUser = () => {
   
    localStorage.removeItem("authToken");

    setIsLoggedIn(false);
    setUser(null);
    history.push("/")
    window.location.reload()
  };

  useEffect(() => {
    verifyToken();
  }, []);

//****** BUSINESS AUTH ********/

const verifyBusinessToken = () => {
  const localJWTToken = localStorage.getItem("authTokenBusiness");

  if (localJWTToken) {
    axios
      .get(`${API_URI}/auth/verify`, {
        headers: { Authorization: `Bearer ${localJWTToken}` },
      })
      .then((response) => {
        const userJWT = response.data;
        setBusiness(userJWT); 
        businessSetIsLoading(false);
        businessSetIsLoggedIn(true);
      })
      .catch((error) => {
        setBusiness(null);
        businessSetIsLoggedIn(false);
        businessSetIsLoading(false);
      });
  } else {
    businessSetIsLoading(false);
  }
};

const logInBusiness = (JWTToken) => {
  localStorage.setItem("authTokenBusiness", JWTToken);
  verifyBusinessToken(); 
};

const logOutBusiness = () => {
  
  localStorage.removeItem("authTokenBusiness");
  
  businessSetIsLoggedIn(false);
  setBusiness(null);
  history.push("/")
  window.location.reload()
};

useEffect(() => {
  verifyBusinessToken();
}, []);

  return (
    <AuthContext.Provider
      value={{ logInUser, logOutUser, user, isLoggedIn, isLoading, logInBusiness, logOutBusiness, business, businessIsLoggedIn, businessIsLoading }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };

