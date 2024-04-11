import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className="container">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className='nav-link' to="/viewallbooks">View All Books</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="/viewallauthors">View All Authors</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="/addbooks">Add Books</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="/addauthors">Add Authors</Link>
                    </li>
                </ul>
            </div>
        </nav>
  );
}

export default Navbar;
