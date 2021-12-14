
import React, { Component, Fragment } from "react";
import Select from "react-select";


export default class AddHourRange extends Component {
  
  

  handleChange = selectedOption => {
    this.props.setSelectedHourRange(selectedOption);
  };
  
  render() {
    return (
      <>
        <Select
          options={this.props.options}
          value={this.props.selectedHourRange}
          onChange={this.handleChange}
          closeMenuOnSelect={false}
        />  
      </>   

    );
  }
}