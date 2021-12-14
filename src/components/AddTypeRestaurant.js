
import React, { Component, Fragment} from "react";
import Select from "react-select";

const options = [
  { value: "fineDining", label: "fineDining" },
  { value: "casual", label: "casual" },
  { value: "familyFriendly", label: "familyFriendly" },
  { value: "foodFood", label: "foodFood" },
  { value: "cafe", label: "cafe" },
  { value: "buffet", label: "buffet" },
  { value: "foodTruck", label: "foodTruck" },
  { value: "popUp", label: "popUp" },
  { value: "Sports Bar", label: "Sports Bar" },
  { value: "Bistro", label: "Bistro" },
  { value: "diner", label: "diner" },
  { value: "themeRestaurant", label: "themeRestaurant" }
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