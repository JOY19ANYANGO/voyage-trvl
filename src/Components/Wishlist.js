import React from 'react';

const Wishlist = ({ wishlist, removeFromWishlist }) => {
  if (wishlist.length === 0) {
    return (
      <div className="Wishlist">
        <h4 >Your Wishlist is Empty</h4>
      </div>
    );
  }

  return (
    <div className="wishlist">
      <h4>Your Wishlist</h4>
      {wishlist.map((area) => (
        <div key={area.id} className="card col-3 m-1">
          <img className='card-img-top' src={area.image} alt="" />
          <div className="card-body">
            <h5 className="card-title">{area.name}</h5>
            <p className="card-text">{area.Description}</p>
            <p className="card-text">{area.Category}</p>
            <p className="card-text">{area.Location}</p>
            <button
              className="btn btn-danger"
              onClick={() => removeFromWishlist(area.id)}
            >
              Remove from Wishlist
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;