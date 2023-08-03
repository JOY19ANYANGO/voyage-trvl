import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import InformationalsContact from "./InformationalsContact";
import InformationalsAboutUs from "./InformationalsAboutUs";
import InformationalsPrivacypolicy from "./InformationalsPrivacyPolicy";
import InformationalsTermsAndConditions from "./InformationalsTerms and conditions";

function App() {
  return (
   <>
   <InformationalsContact/>
   <InformationalsAboutUs/>
   <InformationalsPrivacypolicy/>
   <InformationalsTermsAndConditions/>
   </>
  );
}

export default App;
