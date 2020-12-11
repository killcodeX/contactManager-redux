import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <a href="?" className="navbar-brand">
          Contact Book
        </a>
        <div>
          <Link to="/add-contact" className="btn btn-light ml-auto">
            Create a Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
