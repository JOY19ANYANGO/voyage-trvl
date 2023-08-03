import React, { useState } from 'react';
import Wishlist from './Wishlist';
import {ToastContainer,  toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Areas = ({ areas }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [rating, setRating] = useState(0);
  const [wishlist, setWishlist] = useState([]);
  const [showWishlist, setShowWishlist] = useState(false);

  // Function to filter the areas based on the selected category
  const filterAreas = (category) => {
    setSelectedCategory(category);
  };

  // Filter the areas based on the selected category
  const filteredAreas = selectedCategory === 'all' ? areas : areas.filter((area) => area.Category === selectedCategory);

  // Function to add an area to the wishlist
  const addToWishlist = (area) => {
    if (!wishlist.some((wishlistedArea) => wishlistedArea.id === area.id)) {
      setWishlist((prevWishlist) => [...prevWishlist, area]);
      toast.success(`${area.name} added to wishlist!`,{ autoClose: 2000 });
    } else {
      toast.warning(`${area.name} is already in the wishlist.`,{ autoClose: 2000 });
    }
  };

  // Function to remove an area from the wishlist
  const removeFromWishlist = (areaId) => {
    const removedArea = wishlist.find((area) => area.id === areaId);
    setWishlist((prevWishlist) => prevWishlist.filter((area) => area.id !== areaId));
    toast.error(`${removedArea.name} removed from wishlist.`,{ autoClose: 2000 });
  };
  function toggleWishlist() {
    setShowWishlist(!showWishlist);
  }



  return (
    <div className='Areas'>
      <div className="filter-buttons">
        <button onClick={() => filterAreas('all')}>All</button>
        <button onClick={() => filterAreas('parks')}>Park</button>
        <button onClick={() => filterAreas('mall')}>Mall</button>
        <button onClick={() => filterAreas('historic site')}>Historic</button>
        <button onClick={() => filterAreas('Beach')}>Beach</button>
        <button onClick={() => filterAreas('Hotel')}>Hotel</button>
        <button onClick={toggleWishlist} id="wishlistbutton">
        {showWishlist ? "Hide Wishlist" : "View Wishlist"}
      </button>
      </div>
      <ToastContainer/>
     
      {showWishlist && (
        <div className={`wishlist ${showWishlist ? "active" : ""}`}>
           <Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />
           </div>
      )}
      <div className="row">
        {filteredAreas.length === 0 ? (
          <div className="col-12">
            <h2 style={{color:"white"}}>No Matches Found</h2>
          </div>
        ) : (
          filteredAreas.map((area) => (
            <div key={area.id} className="card col-3 m-1">
              <img className='card-img-top' src={area.image} alt="Your area" />
              <div className="card-body">
                <h5 className="card-title">{area.name}</h5>
                <p className="card-text">{area.Description}</p>
                <p className="card-text">{area.Category}</p>
                <p className="card-text">{area.Location}</p>
                <div>
                  {[...Array(5)].map((_, index) => {
                    const starValue = index + 1;
                    return (
                      <span
                        key={index}
                        className={starValue <= rating ? "on" : "off"}
                        onClick={() => setRating(starValue)}
                      >
                        &#9733;
                      </span>
                    );
                  })}
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => addToWishlist(area)}
                >
                  Add to Wishlist
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      
    </div>
  );
};

export default Areas;