import React from 'react';
import ToggleSwitch from '../components/ToggleSwitch';
import './SwitchList.css';

const SwitchList = props => {
    
    return (
      <React.Fragment>
        <div id="switches-list">
          {props.switches.map(switchText => (
             <ToggleSwitch headerText={switchText}/>
          ))}
         
       </div>
      </React.Fragment>
    );
}

export default SwitchList;