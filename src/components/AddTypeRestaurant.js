import React, { Component, Fragment} from "react";
import Select from "react-select";

const options = [
  { value: "All You Can Eat", label: "All You Can Eat" },
  { value: "Bakery", label: "Bakery" },
  { value: "Buffet", label: "Buffet" },
  { value: "Brunch", label: "Brunch" },
  { value: "Cafe", label: "Cafe" },
  { value: "Casual", label: "Casual" },
  { value: "Family Friendly", label: "Family Friendly" },
  { value: "Fancy", label: "Fancy" },
  { value: "Fine Dining", label: "Fine Dining" },
  { value: "Food Truck", label: "Food Truck" },
  { value: "Outdoor Seating", label: "Outdoor Seating" },
  { value: "Pop Up", label: "Pop Up" },
  { value: "Sports Bar", label: "Sports Bar" },
  { value: "Bistro", label: "Bistro" },
  { value: "Diner", label: "Diner" },
  { value: "Terrace", label: "Terrace" },
  { value: "Theme Restaurant", label: "Theme Restaurant" }
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