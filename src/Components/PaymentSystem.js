import React from 'react';
import './PaymentSystem';

const PaymentSystem = ({ paymentOptions, handleSelectPayment }) => {
  return (
    <div className="payment-system-container">
      <h2>PAYMENTS</h2>
      <h1>Available options</h1>
      <ul>
        {paymentOptions.map((option) => (
          <li key={option.id}>
            <div>
              <span>{option.title}</span>
              <button onClick={() => handleSelectPayment(option)}>Select</button>
            </div>
            <p>{option.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentSystem;
