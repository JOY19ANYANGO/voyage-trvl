import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    window.location.reload(); // Refresh the page
  };
    // This is not a real Travel agency therefore no logic is passed for any backend data
  

  return (
    <div className="background-image">
      <div className="container">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Social Media</div>
              <div className="text-one">Twitter:Voyage-trvl life</div>
              <div className="text-two">Facebook:Ishow-voyage</div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">Phone</div>
              <div className="text-one">+254-98 9893 564</div>
              <div className="text-two">+254-96 3434 567</div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">TraVoyage@gmail.com</div>
              <div className="text-two">info.TraVoyage@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>
              If you have any queries please make sure to send us a message
              here! and please make sure to follow us on our social media pages!
            </p>
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="input-box message-box">
                <textarea
                  placeholder="Whats up"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                ></textarea>
              </div>
              <div className="button">
                <input type="submit" value="Send Now"  onChange={(event) => event.preventDefault(event.target.value)}/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;