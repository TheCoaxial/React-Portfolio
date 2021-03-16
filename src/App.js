import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import './App.css';
import Portfolio from "./pages/Portfolio/Portfolio";
import { Redirect } from "react-router";



function App() {
  return (
  <Router>
    <div >
      <Navbar />
                
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Redirect exact from="/ReactPortfolio" to="/" />
         
      <Footer />
      
    </div>
  </Router>
  );
}

export default App;
