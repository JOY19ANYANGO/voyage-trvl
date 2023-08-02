import React from 'react';

const PaymentSystem = ({ paymentOptions, handleSelectPayment }) => {
  return (
    <div>
      <h2>Payment Options</h2>
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
