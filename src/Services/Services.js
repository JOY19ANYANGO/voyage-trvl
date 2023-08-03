import React, { useState } from 'react';
import Transport from './MeansOfTransport';
import PaymentSystem from './PaymentSystem';

const Services = () => {
  const sampleTransportOptions = [
    { id: 1, title: 'Car', description: 'Travel by car.' },
    { id: 2, title: 'Train', description: 'Travel by train.' },
    { id: 3, title: 'Bus', description: 'Travel by bus.' },
    { id: 3, title: 'Plain', description: 'Travel by Plain.' },
  ];

  const samplePaymentOptions = [
    { id: 'paypal', title: 'PayPal', description: 'Pay with PayPal.' },
    { id: 'credit_card', title: 'Credit Card', description: 'Pay with Credit Card.' },
    { id: 'bank_transfer', title: 'Bank Transfer', description: 'Pay with Bank Transfer.' },
    { id: 'M-PESA', title: 'M-PESA', description: 'Pay with M-PESA.' },
    { id: 'Airtel Money', title: 'Airtel Money', description: 'Pay with Airtel Money.' },
  ];

  const [selectedTransport, setSelectedTransport] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handleSelectTransport = (option) => {
    setSelectedTransport(option);
  };

  const handleSelectPayment = (option) => {
    setSelectedPayment(option);
  };

  return (
    <div>
      <h1>OUR SERVICES</h1>

      <Transport transportOptions={sampleTransportOptions} handleSelectTransport={handleSelectTransport} />

      {selectedTransport && (
        <div>
          <h3>Selected Transport: {selectedTransport.title}</h3>
          <p>{selectedTransport.description}</p>
        </div>
      )}

      <PaymentSystem paymentOptions={samplePaymentOptions} handleSelectPayment={handleSelectPayment} />

      {selectedPayment && (
        <div>
          <h3>Selected Payment Option: {selectedPayment.title}</h3>
          <p>{selectedPayment.description}</p>
        </div>
      )}
    </div>
  );
};

export default Services;
