import React from 'react';
import './navbar.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const navbar = () => {
  return (
    <Router>
    <div>
      <div className="container">
        <nav className="navbar  navbar-expand-lg navbar-light bg-light ">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ">
              <li className="nav-item justify-content-center">
                <Route>
                <Link className="nav-link" to="/home">
                  Home
                </Link>
                </Route>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Route>
                <Link path="/" className="nav-link" to="/">
                  Product
                </Link>
                </Route>
              </li>
            </ul>
          </div>
          <form className="d-flex">
            <i className="fas fa-user-plus"></i>
            <i className="fa fa-heart"></i>
            <Link className="navbar-brand" to="/cart">
              CART
            </Link>
            <Link className="navbar-brand" to="a">
              Login
            </Link>
          </form>
        </nav>
      </div>
      <section className="kGntgQ">
        <div className="container">
          <h3>
            <a href="/">Home </a>/ products
          </h3>
        </div>
      </section>
    </div>
    </Router>
  );
};

export default navbar;
