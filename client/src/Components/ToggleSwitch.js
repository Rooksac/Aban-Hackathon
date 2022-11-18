import React from 'react'
import "./ToggleSwitch.css";

export default function ToggleSwitch({ label, handleLanguageChange }) {
  return (
    <div className="container">
      {label}{" "}
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" 
               name={label} id={label} onClick={handleLanguageChange}/>
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  )
}
