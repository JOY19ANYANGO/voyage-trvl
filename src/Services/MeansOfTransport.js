import React from 'react';
import './Transport.css'; // Ensure the correct path to Transport.css

const Transport = ({ transportOptions, handleSelectTransport }) => {
  return (
    <div className="transport-container">
      <h2>Means of Transport</h2>
      <ul>
        {transportOptions.map((option) => (
          <li key={option.id}>
            <div>
              <span>{option.title}</span>
              <button onClick={() => handleSelectTransport(option)}>Select</button>
            </div>
            <p>{option.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transport;
