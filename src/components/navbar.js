import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className='container'>
        <a href="?" className='navbar-brand'>
            Contact Book
        </a>
        <div>
            <a href="/" className="btn btn-light ml-auto">Create a Contact</a>
        </div>
      </div>
    </nav>
  );
}
