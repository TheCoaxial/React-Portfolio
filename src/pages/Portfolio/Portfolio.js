import React from "react";
import YMFT from "../../Assests/Screencaps/YMFT1.png";
import SoccerApp from "../../Assests/Screencaps/SoccerApp.png";
import Password from "../../Assests/Screencaps/randomPassword2.png";
import "./Portfolio.css";


const Portfolio = () => (

    <div className="container content">
        <h1>Portfolio</h1>

         <hr />
        <div className="row mt-12">
            <div className="col-lg-1"></div>
                <div className="col-lg-11 mb-3" >
                    <h3><p>Dream Team</p></h3>
                    <h4><p><a href="https://github.com/TheCoaxial/HW-5-Daily-Planner">Click Here to See the Repository or Click the Image to Go to the Deployed Site</a></p></h4>
                    <a href="https://thecoaxial.github.io/HW-5-Daily-Planner/">
                    <img src={SoccerApp} alt="A Soccer Field App with Dragable Players" />
                    </a>  
            </div>         
            
        </div>
        <hr />
        <div className="row mt-12">
            <div className="col-lg-1"></div>
            <div className="col-lg-11 mb-3">
                <h3><p>Random Password Generator</p></h3>
                <h4><p><a href="https://github.com/TheCoaxial/Project2">Click Here to See the Repository or Click the Image to Go to the Deployed Site</a></p></h4>
                <a href="https://project2sports.herokuapp.com/login">
                <img src={Password} alt="A screen shot of one of Cory's Github repos" />
                </a>
            </div>
            
        </div>
        <hr />
        <div className="row mt-12">
            <div className="col-lg-1"></div>
            <div className="col-lg-11 mb-3">
                <h3><p>Recipe Finder With Random Recipe Buttons</p></h3>
                <h4><p><a href="https://github.com/TheCoaxial/Your-Menu-for-Today">Click Here to See the Repository or Click the Image to Go to the Deployed Site</a></p></h4>
                <a href="https://thecoaxial.github.io/Your-Menu-for-Today/">
                <img src={YMFT} alt="A screen shot of this website's homepage" />
                </a>
            </div>
        </div>
    </div>
    

);
export default Portfolio;