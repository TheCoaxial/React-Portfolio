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
                          to="/portfolio"
                          className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                        >
                        Past Projects
                        </Link>
                    </li>
                    
                </ul>
            </div>
            
        </nav>
    );
}

export default Navbar;