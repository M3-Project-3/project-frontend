import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function EditPageBusiness() {
  const { id } = useParams();
  console.log("id: ", id);

  //make this dynamic

  const [formState, setFormState] = useState({});
  console.log(formState);

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:5005/business/${id}/edit`, formState)
      .then((response) => {
        setFormState({})
        history.push("/") //path where to go when you click submit
        console.log("response: ", response);
      })
      .catch(console.log);
  }

  function handleInput(e) {
      console.log(e.target.type)
    if (e.target.type === "select-multiple"){
        console.log("-------------",e.target)
        let options = e.target.options
        let value = []
        for(let i=0; i < options.length ; i++){
            if(options[i].selected) value.push(options[i].value)
        }
        setFormState({...formState, [e.target.name] : value} );
        console.log(e.target.value)
    }
    //setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h2>Edit Restaurant Profile</h2>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={handleInput} // onChange={(e) => setHeadline(e.target.value)}
          value={formState.name}
        />


        <label>Address</label>
        <input
          type="text"
          name="address"
          onChange={handleInput} // onChange={(e) => setHeadline(e.target.value)}
          value={formState.address}
        />

        <label>Restaurant Type</label>
        <div>
          <select name="resType" value={formState.value} onChange={handleInput} multiple>
            <option value="fineDining">Fine Dining</option>
            <option value="casual">Casual</option>
            <option value="familyFriendly">Family Friendly</option>
            <option value="foodFood">Fast Food</option>
            <option value="cafe">Cafe</option>
            <option value="buffet">Buffet</option>
            <option value="foodTruck">Food Truck</option>
            <option value="popUp">Pop Up</option>
            <option value="Sports Bar">Sports Bar</option>
            <option value="Bistro">Bistro</option>
            <option value="diner">Diner</option>
            <option value="themeRestaurant">Themed Restaurant</option>
          </select>
        </div>

        <label>Food Type</label>
        <div>
          <select
            name="foodType"
            value={formState.value}
            onChange={handleInput}
            multiple
          >
            <option value="American">American</option>
            <option value="Argentinian">Argentinian</option>
            <option value="British">British</option>
            <option value="Brunch">Brunch</option>
            <option value="Catalan">Catalan</option>
            <option value="Chinese">Chinese</option>
            <option value="European">European</option>
            <option value="German">German</option>
            <option value="Greek">Greek</option>
            <option value="Indian">Indian</option>
            <option value="Korean">Korean</option>
            <option value="Lebanese">Lebanese</option>
            <option value="Mediterranean">Mediterranean</option>
            <option value="Mexican">Mexican</option>
            <option value="Moroccan">Moroccan</option>
            <option value="Pizzeria">Pizzeria</option>
            <option value="Seafood">Seafood</option>
            <option value="Spanish">Spanish</option>
            <option value="Thai">Thai</option>
            <option value="Traditional">Traditional</option>
            <option value="Turkish">Turkish</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Vietnamese">Vietnamese</option>
          </select>
        </div>

        <label>Starters</label>
        <input
          type="text"
          name="menuStarters"
          onChange={handleInput} // onChange={(e) => setHeadline(e.target.value)}
          value={formState.menuStarters}
        />

        <label>Main Course</label>
        <input
          type="text"
          name="menuMain"
          onChange={handleInput} // onChange={(e) => setHeadline(e.target.value)}
          value={formState.menuMain}
        />

        <label>Desert</label>
        <input
          type="text"
          name="desert"
          onChange={handleInput} // onChange={(e) => setHeadline(e.target.value)}
          value={formState.desert}
        />

        <label>Price Range</label>
        <input
          type="text"
          name="priceRange"
          onChange={handleInput} // onChange={(e) => setHeadline(e.target.value)}
          value={formState.priceRange}
        />

        <label>Timetable</label>
        <input
          type="text"
          name="timetable"
          onChange={handleInput} // onChange={(e) => setHeadline(e.target.value)}
          value={formState.timetable}
        />

        <label>Tables</label>
        <input
          type="text"
          name="tables"
          onChange={handleInput} // onChange={(e) => setHeadline(e.target.value)}
          value={formState.tables}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
