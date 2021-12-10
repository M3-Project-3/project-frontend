import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import HomePage from "./pages/General/HomePage";
import SignupPage from "./pages/Users/SignupPage"
import SignupPageBusiness from "./pages/Business/SignupPageBusiness";
import LoginPage from "./pages/Users/LoginPage";
import LoginPageBusiness from "./pages/Business/LoginPageBusiness";
import ReservationForm from "./pages/ReservationForm"  
import AnonRoute from "./components/AnonRoute"; 
import EditPageBusiness from "./pages/Business/EditPageBusiness";


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
