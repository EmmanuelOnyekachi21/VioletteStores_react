import React from 'react'
import { Link } from 'react-router-dom'
import NavBarLink from './NavBarLink';

const NavBar = ({number_of_item}) => {
  return (
    <nav
      className="navbar navbar-expand-md navbar-light bg-white shadow-sm fixed-top"
    >
      <div className="container">
        {/* <a href="#" className="navbar-brand fw-bold order-md-0">VioletteStores</a> */}
        <Link className='navbar-brand fw-bold order-md-0' to='/'>VioletteStores</Link>

        <div className="order-md-2">
        <Link to='/cart' >
          <button className="btn position-relative" type="button" aria-label="Cart">
          <i className="fa fa-shopping-cart fs-3"></i>
            {number_of_item === 0 || <span className='position-absolute top-0 start-100 text-bg-dark translate-middle badge'>{number_of_item}</span>}
          </button>
        </Link>
        </div>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse order-md-1"
          id="navbarSupportedContent"
        >
          <NavBarLink/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;