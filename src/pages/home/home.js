import React from "react";
import Headshot from "../../Assests/Headshot.jpg";
import Resume from "../../Assests/Resume for Web Dev.pdf";
import Quiz from "../../Assests/Screencaps/Quiz.png";
import "./home.css";

const Home = () =>(
    <div className ="container ">
        <h1 className="block-center">Home</h1>

        
        <section className="content aboutMe ">
            
                <div className="content-inside">
                    <img src={Headshot} alt="A headshot of Cory" className="margin-top responsive" />
                
                    <p className="clearfix">
                        Hi there, I'm a manufacturing technician transitioning into full stack web developing. 
                        In my previous work I was responsible for maintaining and repairing large and often dangerous equipment. 
                        Due to this, I developed a keen sense of detail and organization as overlooking some detail, even a seemingly minor one, could have a major effect. 
                        In addition I often had to work very closely with either maintenance or the regular machine operators or both! 
                        Communication was key to making sure we arrived at the correct solution in a timely and efficient manner. 
                        Now I’m bringing both my communication skills and sense of detail orientation to my budding web development skills.
                    </p>

                    <p>
                    <a href="https://github.com/TheCoaxial" target="_blank">Github Profile</a>
                    </p>

                    <p>
                    <a href="https://www.linkedin.com/in/cory-scanlon-6522311b7/" target="_blank">Linkedin Profile</a>
                    </p>

                    <p>
                    <a href={Resume} download="Cory Scanlon's Resume" target="_blank">Download Cory's Resume</a>
                    </p>

                    <p>Email: coryscanlon012@gmail.com</p> <p>Phone: (740)814-5702</p>

                </div>
        </section>
        
        <section className="bottom-section">

        <h1 className="block-center">Current Project</h1>

        <div className="block-center content">    
            <div className="bottom-section" >    
            <h3><p>Vue Quiz App</p></h3>
                <h4><p><a href="https://github.com/TheCoaxial/VueQuiz/tree/main" target="_blank">Click here to see the repository or click the image to go to the deployed site</a></p></h4>
                <a href="https://thecoaxial.github.io/VueQuiz/" target="_blank">
                <img src={Quiz} alt="A screen shot of the profile page" className="responsive"/>
                </a>
            </div>                
        </div>
        
        </section>
    </div>
);

export default Home;