import React from 'react';
const Reviews = () => {
  const sampleReviews = [ {
      id: 1,
      author: 'John Doe',
      content: 'Great product i am loving it.', 
    },
    {
      id: 2,
      author: 'Jane Smith',
      content: 'Excellent service and fast delivery.',
    },
  ]

  return (
    <div className="App">
      <h1>Reviews</h1>
      <div className="review-list">
        {reviews.map(review => (
          <div key={review.id} className="review">
            <h2>{review.author}</h2>
            <p>{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;