import React, { useState } from 'react';

const Areas = ({ areas }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Function to filter the areas based on the selected category
  const filterAreas = (category) => {
    setSelectedCategory(category);
  };

  // Filter the areas based on the selected category
  const filteredAreas = selectedCategory === 'all' ? areas : areas.filter((area) => area.Category === selectedCategory);

  return (
    <div>
      <div className="filter-buttons">
        <button onClick={() => filterAreas('all')}>All</button>
        <button onClick={() => filterAreas('parks')}>Park</button>
        <button onClick={() => filterAreas('mall')}>Mall</button>
        <button onClick={() => filterAreas('historic site')}>Historic</button>
        <button onClick={() => filterAreas('Beach')}>Beach</button>
      </div>
      <div className="card-container">
        {filteredAreas.map((area) => (
          <div key={area.id} className="card">
            <div className="image-container">
              <img src={area.image} alt="" />
            </div>
        
            <p className="area-name">{area.name}</p>
            <p className="area-description">{area.Description}</p>
            <p className="area-category">{area.Category}</p>
            <p className="area-location">{area.Location}</p>
            <div className="rating-stars">
            <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star"></span>
         <span class="fa fa-star"></span>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Areas;
