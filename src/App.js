import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Nabvar";
import HomePage from "./pages/General/HomePage";
import SignupPage from "./pages/Users/SignupPage"
import SignupPageBusiness from "./pages/Business/SignupPageBusiness";
import LoginPage from "./pages/Users/LoginPage";
import LoginPageBusiness from "./pages/Business/LoginPageBusiness";
import ReservationForm from "./pages/ReservationForm"  
import AnonRoute from "./components/AnonRoute"; 
import EditPageBusiness from "./pages/Business/EditPageBusiness";
import FilterRestaurantsPage from "./pages/General/FilterRestaurantsPage";
import SingleRestaurantPage from "./pages/General/SingleRestaurantPage";
import {useContext} from "react"
import ReservationListPage from "./pages/ReservationListPage";


function App() {

  return (
    <div className="App">
      <Navbar/>
      
      <Switch>      
        <Route exact path="/" component={HomePage} />
        <Route exact path="/restaurants" component={FilterRestaurantsPage} />
        <Route exact path="/reservation/new" component={ReservationForm} />
        <Route exact path="/restaurants/:id" component={SingleRestaurantPage} />
      
        <AnonRoute exact path="/signup" component={SignupPage} />
        <AnonRoute exact path="/login" component={LoginPage} />
        <AnonRoute exact path="/business/login" component={LoginPageBusiness} />
        <AnonRoute exact path="/business/signup" component={SignupPageBusiness} />
        <AnonRoute exact path="/business/:id/edit" component={EditPageBusiness} />
        <Route exact path="/business/:id/reservation" component={ReservationListPage} />

      </Switch>
    </div>
  );
}

export default App;
