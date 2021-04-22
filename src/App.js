import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/home/Home";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import './App.css';
import background from "./Assests/Background.jpg"
import Portfolio from "./pages/Portfolio/Portfolio";
import { Redirect } from "react-router";



function App() {
  return (
  <Router>
    <div className="">
      <Navbar />
                
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Redirect exact from="/ReactPortfolio" to="/" />
    </div>

    <div>  
      <Footer />
      
    </div>
  </Router>
  );
}

export default App;
