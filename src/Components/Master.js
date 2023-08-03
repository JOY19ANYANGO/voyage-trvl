import React from "react";
import InformationalsAboutUs from "../InformationalsAboutUs";
import InformationalsContact from "../InformationalsContact";
import InformationalsPrivacypolicy from "../InformationalsPrivacyPolicy";
import InformationalsTermsAndConditions from "../InformationalsTerms and conditions";
import "./Style/Informationals.css";
function Master(){
return(
    <div className="aboutus">
    <InformationalsAboutUs/>
    <InformationalsContact/>
    <InformationalsPrivacypolicy/>
    <InformationalsTermsAndConditions/>
    </div>
)
}

export default Master;