import React from 'react';
import SideBar from '../components/SideBar';
import SwitchList from '../components/SwitchList';

const Sensors = () => {

  let N_SENSORS = 6;
  let SENSORS = [];

  for(let i=0; i<N_SENSORS; i++){
    SENSORS.push("Sensor " + i);
  }

  return (
    <React.Fragment>
      <SideBar/>
      <SwitchList switches={SENSORS}/>
    </React.Fragment>
  ); 
}

export default Sensors;