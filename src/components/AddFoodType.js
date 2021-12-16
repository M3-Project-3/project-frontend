import React, { Component } from "react";
import Select from "react-select";

const options = [
    { value: "American", label: "American" },
    { value: "Argentinian", label: "Argentinian" },
    { value: "asian", label: "Asian" },
    { value: "British", label: "British" },
    { value: "Brunch", label: "Brunch" },
    { value: "Catalan", label: "Catalan" },
    { value: "Chinese", label: "Chinese" },
    { value: "European", label: "European" },
    { value: "Fusion", label: "Fusion" },
    { value: "German", label: "German" },
    { value: "Greek", label: "Greek" },
    { value: "Indian", label: "Indian" },
    { value: "Korean", label: "Korean" },
    { value: "Lebanese", label: "Lebanese" },
    { value: "Mediterranean", label: "Mediterranean" },
    { value: "Mexican", label: "Mexican" },
    { value: "Moroccan", label: "Moroccan" },
    { value: "Pizzeria", label: "Pizzeria" },
    { value: "Seafood", label: "Seafood" },
    { value: "southamerican", label: "South American" },
    { value: "Spanish", label: "Spanish" },
    { value: "Thai", label: "Thai" },
    { value: "Traditional", label: "Traditional" },
    { value: "Turkish", label: "Turkish" },
    { value: "Vegetarian", label: "Vegetarian" },
    { value: "Vegan", label: "Vegan" },
    { value: "Vietnamese", label: "Vietnamese" }
];

export default class AddFoodType extends Component {
  
  handleChange = selectedOption => {
    this.props.setSelectedFoodType(selectedOption);
  };
  
  render() {
    return (
      <>
        <Select
          isMulti
          options={options}
          value={this.props.selectedFoodType}
          onChange={this.handleChange}
          closeMenuOnSelect={false}
          defaultValue={this.props.food}
        />  
      </>   

    );
  }
}