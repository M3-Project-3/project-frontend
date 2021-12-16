import React, { Component, Fragment} from "react";
import Select from "react-select";

const options = [
  { value: "allyoucaneat", label: "All You Can Eat" },
  { value: "bakery", label: "Bakery" },
  { value: "buffet", label: "Buffet" },
  { value: "Brunch", label: "Brunch" },
  { value: "cafe", label: "Cafe" },
  { value: "casual", label: "Casual" },
  { value: "familyFriendly", label: "Family Friendly" },
  { value: "Fancy", label: "Fancy" },
  { value: "fineDining", label: "Fine Dining" },
  { value: "foodTruck", label: "Food Truck" },
  { value: "outdoorseating", label: "Outdoor Seating" },
  { value: "popUp", label: "Pop Up" },
  { value: "Sports Bar", label: "Sports Bar" },
  { value: "Bistro", label: "Bistro" },
  { value: "diner", label: "Diner" },
  { value: "Terrace", label: "Terrace" },
  { value: "themeRestaurant", label: "Theme Restaurant" }
];

export default class AddTypeRestaurant extends Component {
  
  handleChange = selectedOption => {
    this.props.setSelectedResType(selectedOption);
  };
  
  render() {
    return (
      <>
        <Select
          isMulti
          options={options}
          value={this.props.selectedResType}
          onChange={this.handleChange}
          closeMenuOnSelect={false}
          defaultValue={this.props.restaurant}
        />  
      </>   

    );
  }
}