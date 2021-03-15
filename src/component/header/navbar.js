import React from 'react';
import './navbar.css';
const navbar = () => {
  return (
    <div>
      <div className="container">
        <nav className="navbar  navbar-expand-lg navbar-light bg-light ">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ">
              <li className="nav-item justify-content-center">
                <a className="nav-link" href="a">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="a">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="a">
                  Product
                </a>
              </li>
            </ul>
          </div>
          <form className="d-flex">
            <i className="fas fa-user-plus"></i>
            <i className="fa fa-heart"></i>
            <a className="navbar-brand" href="a">
              CART{' '}
            </a>
            <a className="navbar-brand" href="a">
              Login
            </a>
          </form>
        </nav>
      </div>
      <section className="section">
        <div className="container">
          <h2>Home / Product</h2>
        </div>
      </section>
    </div>
  );
};

export default navbar;
