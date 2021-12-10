import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import SignupPageBusiness from "./pages/SignupPageBusiness";
import LoginPage from "./pages/LoginPage";
import LoginPageBusiness from "./pages/LoginPageBusiness";
import ReservationForm from "./pages/ReservationForm"  
import AnonRoute from "./components/AnonRoute"; 



function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>      
        <Route exact path="/" component={HomePage} />
        <Route exact path="/reservation/create" component={ReservationForm} />
      
        <AnonRoute exact path="/signup" component={SignupPage} />
        <AnonRoute exact path="/login" component={LoginPage} />
        <AnonRoute exact path="/business/login" component={LoginPageBusiness} />
        <AnonRoute exact path="/business/signup" component={SignupPageBusiness} />
        <AnonRoute exact path="/business/:id/edit" component={EditPageBusiness} />

      </Switch>
    </div>
  );
}

export default App;
