import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';



const Navigation = (props) => {
    const isActiveRoute = (path) => {
        return window.location.pathname === path;
    };

    return (
        <nav className="vertical-nav"> 
            <NavLink to="/home" className="nav-link" activeClassName={isActiveRoute("/home") ? "active" : ""}>
                <button className="btn1">Home</button>
            </NavLink>
            <NavLink to="/client" className="nav-link" activeClassName={isActiveRoute("/client") ? "active" : ""}>
                <button className="btn">Client</button>
            </NavLink>
            <NavLink to="/company" className="nav-link" activeClassName={isActiveRoute("/company") ? "active" : ""}>
                <button className="btn">Company</button>
            </NavLink>
        </nav> 
    );


};




export default Navigation;