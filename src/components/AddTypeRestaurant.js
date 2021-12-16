
import React, { Component, Fragment} from "react";
import Select from "react-select";

const options = [
  { value: "fineDining", label: "Fine Dining" },
  { value: "casual", label: "Casual" },
  { value: "familyFriendly", label: "Family Friendly" },
  { value: "cafe", label: "Cafe" },
  { value: "buffet", label: "Buffet" },
  { value: "foodTruck", label: "Food Truck" },
  { value: "popUp", label: "Pop up" },
  { value: "Sports Bar", label: "Sports Bar" },
  { value: "Bistro", label: "Bistro" },
  { value: "diner", label: "Diner" },
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