import React from 'react';
import SideBar from '../components/SideBar';
import './History.css';

const History = props => {

  const EVENTS = [
    {
      name: "Alarme",
      sensor: "4",
      date: "2021-01-20 20:56:51"
    },
    {
      name: "Alarme",
      sensor: "4",
      date: "2021-01-20 20:54:27"
    },
    {
      name: "Alarme",
      sensor: "5",
      date: "2021-01-20 17:54:44"
    },
    {
      name: "Alarme",
      sensor: "5",
      date: "2021-01-20 17:51:38"
    },
    {
      name: "Alarme",
      sensor: "4",
      date: "2021-01-20 17:50:36"
    }
];

  return (
    <React.Fragment>
    <SideBar/>
    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Evento</th>
      <th scope="col">Sensor</th>
      <th scope="col">Data</th>
    </tr>
  </thead>
  <tbody>
  {EVENTS.map(event => (
    <tr>
      <td>{event.name}</td>
      <td>{event.sensor}</td>
      <td>{event.date}</td>
    </tr>
  ))}
  </tbody>
</table>
</React.Fragment>
  );
};

export default History;