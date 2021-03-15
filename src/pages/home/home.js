import React from "react";
import "./home.css";

const Home = () =>(
    <div className ="container float-left">
        <section className="content">
            <h1>Home</h1>

            <hr></hr>

            <div className="float-left extra-padding">
                <img src="Assets\screenCaps\Headshot.png" alt="A headshot of Cory" />
            </div>
                <div className="content-inside">
                    <p>
                        Hi there, I'm a manufacturing technician transitioning into full stack web developing. 
                        In my previous work I was responsible for maintaining and repairing large and often dangerous equipment. 
                        Due to this, I developed a keen sense of detail and organization as overlooking some detail, even a seemingly minor one, could have a major effect. 
                        In addition I often had to work very closely with either maintenance or the regular machine operators or both! 
                        Communication was key to making sure we arrived at the correct solution in a timely and efficient manner. 
                        Now I’m bringing both my communication skills and sense of detail orientation to my budding web development skills.
                    </p>

                    <p>
                        <a href="https://github.com/TheCoaxial">Github Profile</a>
                    </p>
                    <p><a href="https://www.linkedin.com/in/cory-scanlon-6522311b7/">Linkedin Profile</a></p>
                    <a href="Assets/Resume for Web Dev.pdf" download="Cory Scanlon's Resume">Download Cory's Resume</a>
                    <p>Thecoaxial@gmail.com</p> <p>(740)814-5702</p>

                </div>
        </section>
    </div>
);

export default Home;