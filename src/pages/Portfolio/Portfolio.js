import React from "react";
import YMFT from "../../Assests/Screencaps/YMFT1.png";
import SoccerApp from "../../Assests/Screencaps/SoccerApp.png";
import FWF from "../../Assests/Screencaps/FWF.png";

import "./Portfolio.css";


const Portfolio = () => (
    <section>

        <h1 className="block-center">Past Projects</h1>

        <div className="container content" >
        
            <section className="bottom-section block-center">
                <div className="row mt-12">  
                    <div className="col-lg-12 mb-3">
                        <h3><p >Fun With Fermentation</p></h3>
                        <hr></hr>
                        <h4><p><a href="https://github.com/TheCoaxial/Final-Project" target="_blank">Click here to see the repository or click the image to go to the deployed site</a></p></h4>
                        <a href="https://salty-dawn-64372.herokuapp.com/" target="_blank">
                        <img src={FWF} alt="A screen shot of the profile page" />
                        </a>
                    </div>      
                </div>
            </section>    
        </div>

        <div className="container content" >
            <section className="bottom-section block-center">
                <div className="row mt-12"> 
                    <div className="col-lg-12 mb-3" >
                        <h3><p >Dream Team</p></h3>
                        <hr></hr>
                        <h4><p><a href="https://github.com/mdurst365/Project2" target="_blank">Click here to see the repository or click the image to go to the deployed site</a></p></h4>
                        <a href="https://project2sports.herokuapp.com/login" target="_blank">
                        <img src={SoccerApp} alt="A Soccer Field App with Dragable Players" />
                        </a>  
                    </div>                  
                </div>
            </section>    
        </div>

        <div className="container content bottom-section" >
            <section className="bottom-section block-center">
                <div className="row mt-12 ">   
                    <div className="col-lg-12 mb-3">
                        <h3><p >Recipe Finder With Random Recipe Buttons</p></h3>
                        <hr></hr>
                        <h4><p><a href="https://github.com/TheCoaxial/Your-Menu-for-Today" target="_blank">Click here to see the repository or click the image to go to the deployed site</a></p></h4>
                        <a href="https://thecoaxial.github.io/Your-Menu-for-Today/" target="_blank">
                        <img src={YMFT} alt="A screen shot of this website's homepage" />
                        </a>
                    </div>
                </div>
            </section>
        </div>

    </section>
    

);
export default Portfolio;