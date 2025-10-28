import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
    <div className="container">
      <Link className="navbar-brand fw-bold text-danger" to="/">🌸 MyStock</Link>
      <div>
        <Link className="nav-link d-inline text-dark mx-2" to="/">Home</Link>
        <Link className="nav-link d-inline text-dark mx-2" to="/add">Add Stock</Link>
        <Link className="nav-link d-inline text-dark mx-2" to="/view">View Stock</Link>
        <Link className="nav-link d-inline text-dark mx-2" to="/history">History</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
