import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = props => {

  return (
    <React.Fragment>
      <div className="padding30 center">
        <h4 className="flex align-center">{props.headerText}</h4>
        <label className="switch flex center">
        <input type="checkbox" id="togBtn"></input>
        <div className="slider round">
          <span className="on">ON</span>
          <span className="off">OFF</span>
        </div>
        </label>
      </div>
    </React.Fragment>
  ); 
}

export default ToggleSwitch;