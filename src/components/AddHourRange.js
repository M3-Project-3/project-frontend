

import React, { Component, Fragment } from "react";
import Select from "react-select";

const options = [
  { value: "12:00-13:00", label: "12:00-13:00" },
  { value: "13:00-14:00", label: "13:00-14:00" },
  { value: "14:00-15:00", label: "14:00-15:00" },
  { value: "15:00-16:00", label: "15:00-16:00" },
  { value: "19:00-20:00", label: "19:00-20:00" },
  { value: "20:00-21:00", label: "20:00-21:00" },
  { value: "21:00-22:00", label: "21:00-22:00" },
  { value: "22:00-23:00", label: "22:00-23:00" },
  { value: "23:00-24:00", label: "23:00-24:00" }
];

export default class AddHourRange extends Component {
  
  

  handleChange = selectedOption => {
    this.props.setSelectedHourRange(selectedOption);
  };
  
  render() {
    return (
      <>
        <Select
          isMulti
          options={options}
          value={this.props.selectedHourRange}
          onChange={this.handleChange}
          closeMenuOnSelect={false}
          defaultValue={this.props.restaurant}
        />  
      </>   

    );
  }
}