import React, { useState } from "react";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

const Calendar = (props) => {
  //const [dob, setDob] = useState(null);
  const [focused, setFocused] = useState(false);
  //const [date, setDate] = useState(null)
  

  //const sendDate = () => {
  //  const day = date._d.getDate()
  //  const month = date._d.getMonth()+1
  //  const year = date._d.getFullYear()
//
  //  const reservationDate= `${day} ${month} ${year}`
  //  props.funcDate(reservationDate)
  //}
  //
  //if(date) {
  //  sendDate()
  //}
  
  return (
    <>
      <SingleDatePicker
        date={props.date}
        // {...input}
        numberOfMonths={1}
        onDateChange={(newdate)=>props.setDate(newdate)}
        focused={focused}
        onFocusChange={focused=>{
            setFocused(true)
        }}
        id="dob"
      />
    </>
  );
};

export default Calendar;
