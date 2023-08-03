import React from "react";
import "./Style/Body.css";

function Body() {
  return (
    <>
      <div className="body">
        <div className="h1">
          <h1>Where to?</h1>
        </div>

        <div style={{ padding: "300px" }}>
          <form>
            <input
              style={{
                margin: " auto",
                width: "760px",
                height: "54px",
                position: "relative",
                borderRadius: "64px",
                border: "1px",
                display: "flex",
                alignContent: "center",
              }}
            ></input>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
              style={{
                marginTop: "-35px",
                position: "absolute",
                marginLeft: "20px",
              }}
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <button
              type="button"
              class="btn btn-info"
              style={{
                marginTop: "-46px",
                position: "absolute",
                marginLeft: "670px",
                borderRadius: "70px",
                width: "80px",
              }}
            >
              Search
            </button>
          </form>
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div style={{ position: "relative" }}>
            <div className="cardi">
              <h2>01</h2>
              <div className="card2">
                <h4>Tour Packages</h4>
                <p>
                  Tour packages can provide a convenient and affordable way to
                  explore new destinations, with options for transportation,
                  accommodations, and activities included.
                </p>
              </div>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div className="card">
              <h2>02</h2>
              <div className="card2">
                <h4>Flight Booking</h4>
                <p>
                  When booking a flight, consider factors such as cost, airline
                  reputation, departure and arrival times, layovers, and baggage
                  allowances.
                </p>
              </div>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div className="card">
              <h2>03</h2>
              <div className="card2">
                <h4>Hotel Booking</h4>
                <p>
                  Booking a hotel room online is convenient and easy, with
                  options for room type, location, amenities, and price
                  available to compare and choose from.
                </p>
              </div>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div className="card">
              <h2>04</h2>
              <div className="card2">
                <h4>Destination Booking</h4>
                <p>
                  When planning your next trip, consider the destination's
                  climate, activities, culture, transportation, and
                  accommodations to make the most of your experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ width: "100%", height: "1200px", backgroundColor: "black" }}
      >
        <h3>Places</h3>
        <div
          style={{ display: "flex", justifyContent: "space-evenly" }}
          className="places"
        >
          <div className="wildlife">
            {" "}
            <h4>WILDLIFE</h4>
          </div>
          <div className="historic">
            <h4>HISTORIC SITE</h4>
          </div>
          <div className="coast">
            <h4>COAST</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
