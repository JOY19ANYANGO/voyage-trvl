import React from "react";
import "./Style/Footer.css";

function Footer() {
  return (
    <>
    <div className="last" >
    <div className="lastImage"></div>
     <div className="lastTexts" style={{display:"flex" , justifyContent:"space-evenly" , marginTop:"30px"}}>
      <div>
        <h6>Reach us on</h6>
        <p>Karen, Oasis Plaza Room No. 34 Nairobi , Kenya
        </p>
        <p>+245 712-345-678</p>
      </div>
      <div>
        <h6>About</h6>
        <p>About us </p>
        <p>Faq</p>
        <p>Login</p>
        <p>Register</p>
      </div>
      <div>
        <h6>Discover</h6>
        <p>Blog </p>
        <p>Tour guide</p>
        <p>Wishlist</p>
        <p>Fun-Facts</p>
      </div>
      <div>
        <h6>Social Media</h6>
        <p>Instagram // VoyageTravelers </p>
        <p>Twitter // VoyageTravelers</p>
        <p>Tiktok // VoyageTravelers</p>
        <p>Facebook // VoyageTravelers</p>
      </div>
     </div>
    </div>
    </>
  );
}

export default Footer;
