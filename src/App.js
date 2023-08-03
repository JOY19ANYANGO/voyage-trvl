import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Home from "./Home";
import Contacts from "./Contacts";
import AboutUs from "./AboutUs";
import Reviews from "./Reviews";
import Places from "./Places";
import AboutUs from "./InformationalsAboutUs"
import Contact from "./InformationalsContactContact"
import PrivacyPolicy from "./Privacy policy";
import TermsAndConditions from "./Terms and conditions";

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/AboutUs"  component={AboutUs} />
        <Route path="/Reviews"  component={Reviews} />
        <Route path="/Places"  component={Places} />
        <Route path="/Contact"  component={Contact} />
        <Route path="/Privacypolicy" component={PrivacyPolicy}/>
        <Route path="/Termsandconditions" component={TermsAndConditions}/>
      </Switch>
    </Router>
    </>
  );
}

export default App
