import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const isActiveRoute = (path) => {
    return window.location.pathname === path;
  };

  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/PokeNumber" className="nav-link" activeClassName={isActiveRoute("/PokeNumber") ? "active" : ""}>
            <button className="btn1">Search by Number</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Stats" className="nav-link" activeClassName={isActiveRoute("/Stats") ? "active" : ""}>
            <button className="btn">Search By Stats</button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
