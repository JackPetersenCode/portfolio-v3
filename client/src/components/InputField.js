import React, { useState } from "react";
import "../App.css";

const InputField = ({ label, type, value, onChange }) => {
    const [focused, setFocused] = useState(false);
  
    const handleFocus = () => {
      setFocused(true);
    };
  
    const handleBlur = () => {
      setFocused(value !== "");
    };
  
    return (
      <div className={`input-field ${focused ? "focused" : ""}`}>
        <input
          type={type}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <label>{label}</label>
      </div>
    );
  };
  
  export default InputField;