import React from 'react';
import { Link } from 'react-router-dom'; 
import './SideBar.css';

const SideBar = () => {

  return (
    <div className="vertical-nav" id="sidebar">
        <ul className="nav flex-column mb-0">
            <li className="nav-item">
                <Link className="nav-link text-white font-italic" to="/" > 
                    Home
                </Link>
                <hr></hr>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white font-italic" to="/history" > 
                    Histórico
                </Link>
                <hr></hr>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white font-italic" to="/sensors"> 
                    Sensores
                </Link>
                <hr></hr>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white font-italic" to="/options"> 
                    Opções
                </Link>
                <hr></hr>
            </li>
        </ul>
    </div>
);

};

export default SideBar;