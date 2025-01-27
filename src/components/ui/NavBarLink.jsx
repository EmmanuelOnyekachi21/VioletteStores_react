import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const NavBarLink = () => {
  const { isAuthenticated, username, setIsAuthenticated } = useContext(AuthContext);

  function logout() {
    localStorage.removeItem('access');
    setIsAuthenticated(false);
  }
  return (
    <ul className="navbar-nav text-center mx-auto mb-2 mb-lg-0">
      <li className="nav-item px-2 py-2">
        <NavLink to='/' className={({ isActive }) => isActive ? "nav-link fw-semibold active" : "nav-link fw-semibold"}>
          Home
        </NavLink>
      </li>
      <li className="nav-item px-2 py-2">
        <NavLink to='/shop' className={({ isActive }) => isActive ? "nav-link fw-semibold active" : "nav-link fw-semibold"}>
          SHOP
        </NavLink>
      </li>
      <li className="nav-item px-2 py-2">
        <NavLink to='/about' className={({ isActive }) => isActive ? "nav-link fw-semibold active" : "nav-link fw-semibold"}>
          ABOUT
        </NavLink>
      </li>
      <li className="nav-item dropdown d-flex flex-column justify-content-center">
        {isAuthenticated ? (
          <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa fa-user" aria-hidden="true"></i>
            <span className="userSpace d-inline">Hi, {username}</span>
          </button>
        ) : (
          <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa fa-user" aria-hidden="true"></i>
            <span className="userSpace d-inline">Login/Register</span>
          </button>
        )}
        <ul className="dropdown-menu dropdown-menu-dark text-center">
          {isAuthenticated ? (
            <>
              <li><a className="dropdown-item" href="/profile">PROFILE</a></li> {/* You can add the logout functionality here */}
              <li><a className="dropdown-item" onClick={logout} href="/">LOGOUT</a></li> {/* You can add the logout functionality here */}
            </>
          ) : (
            <>
              <li><a className="dropdown-item" href="/login">LOGIN</a></li>
              <li><a className="dropdown-item" href="/register">REGISTER</a></li>
            </>
          )}
        </ul>
      </li>
    </ul>
  );
};

export default NavBarLink;
