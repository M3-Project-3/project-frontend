import "./App.css";
import "../src/Components.css"
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

import BottomNavbar from "./components/BottomNavbar"
import AnonRouteBusiness from "./components/AnonRouteBusiness"

//import ReservationListPageBusiness from "./pages/Business/ReservationListPageBusiness";
import ReservationListPageUser from "./pages/Users/ReservationListPageUser";



function App() {

  return (
    <div className="App">
       <Navbar/>
      
      <Switch>      
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route exact path="/" component={FilterRestaurantsPage} />
        <Route exact path="/:resId/reservation/new" component={ReservationForm} />
        <Route exact path="/restaurants/:id" component={SingleRestaurantPage} />
      
        <AnonRoute exact path="/signup" component={SignupPage} />
        <AnonRoute exact path="/login" component={LoginPage} />
        <AnonRouteBusiness exact path="/business/login" component={LoginPageBusiness} />
        <AnonRouteBusiness exact path="/business/signup" component={SignupPageBusiness} />
        <AnonRouteBusiness exact path="/business/:id/edit" component={EditPageBusiness} />

        <Route exact path="/:id/reservations" component={ReservationListPageUser}/>
        
      </Switch>
      <BottomNavbar/>
    </div>
  );
}

export default App;
