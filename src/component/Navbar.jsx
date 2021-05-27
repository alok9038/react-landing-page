import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () =>{
  return (
    <>
      <nav className="navbar navbar-expand lg navbar-light bg-transparent">
        <div className="container">
            <NavLink to="/" className="navbar-brand">React Start</NavLink>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item"><NavLink exact to="/"  className="nav-link" aria-current="page">Home</NavLink></li>
                <li className="nav-item"><NavLink  to="/contact"  className="nav-link">Contact</NavLink></li>
                <li className="nav-item"><NavLink  to="/service"  className="nav-link">Service</NavLink></li>
                <li className="nav-item"><NavLink  to="/users"  className="nav-link">Users</NavLink></li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;