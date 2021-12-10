import React, { useState } from "react";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

const Calendar = (props) => {
  //const [dob, setDob] = useState(null);
  const [focused, setFocused] = useState(false);
  const [date, setDate] = useState(null)

  if(date) {
    //const dia = "on Dec 13 2021 12:00:00 GMT+0100 (hora estándar de Europa central)"
    const dia = toString(date._d)
    const arr = dia.split(" ")
    console.log(arr)
}
  
  return (
    <>
      <SingleDatePicker
        date={date}
        // {...input}
        numberOfMonths={1}
        onDateChange={(newdate)=>setDate(newdate)}
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
