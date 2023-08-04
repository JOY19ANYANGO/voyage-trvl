import React, { useState } from 'react';

const ReviewsForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault
    const newReview = {
      name: name,
      rating: rating,
      comment: comment
    };
    onSubmit(newReview);
    setName('');
    setRating(5);
    setComment('');
  };

  return (
    <div className="reviews-form">
      <h2>Add a Review</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            value={rating}
            min="1"
            max="5"
            onChange={(e) => setRating(parseInt(e.target.value))}
            required
          />
        </div>
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewsForm;