import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";


function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                Home
            </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link 
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/home"
                                ? "nav-link active"
                                : "nav-link"
                            }
                        >
                        Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                          to="/portfolio"
                          className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                        >
                        Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                          to="/contact"
                          className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                        >
                        contact
                        </Link>
                    </li>
                </ul>
            </div>
            
        </nav>
    );
}

export default Navbar;