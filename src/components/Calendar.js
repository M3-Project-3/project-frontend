import React, { useState } from "react";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

const Calendar = (props) => {
  const [focused, setFocused] = useState(false);
  
  return (
    <>
      <SingleDatePicker
        date={props.date}
        // {...input}
        numberOfMonths={1}
        withPortal={true}
        onDateChange={(newdate)=>props.setDate(newdate)}
        focused={focused}
        onFocusChange={()=>setFocused(focused => !focused)}
      />
    </>
  );
};

export default Calendar;
