import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";


function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">    
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                          to="/home"
                          className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
                        >
                        Home
                        </Link>
                    </li>
                    
                </ul>
            
            </div>
            
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