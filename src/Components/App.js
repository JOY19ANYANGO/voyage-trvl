import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Home from "./Home";
import Services from "./Services"
import Places from "./Places";

import AboutUs from "./About Us";
import Contact from "./Contact";
import Reviews from "./Review";


function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/AboutUs"  component={AboutUs} />
        <Route path="/Services"  component={Services} />
        <Route path="/Places"  component={Places} />
        <Route path="/Contact"  component={Contact} />
        <Route path="/Reviews"  component={Reviews} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
