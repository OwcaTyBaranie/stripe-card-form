import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your-publishable-key-here');

const CardForm = () => {
  const [country, setCountry] = useState('PL');
  const [cardholderName, setCardholderName] = useState('Jan Kowalski');
  const stripe = useStripe();
  const elements = useElements();

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
    setCardholderName(selectedCountry === 'PL' ? 'Jan Kowalski' : 'John Doe');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: cardholderName,
      },
    });

    if (error) {
      console.error(error);
    } else {
      console.log('PaymentMethod created successfully!', paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Country:
        <select value={country} onChange={handleCountryChange}>
          <option value="PL">Polska</option>
          <option value="US">USA</option>
        </select>
      </label>
      <br />
      <label>
        Cardholder Name:
        <input type="text" value={cardholderName} readOnly />
      </label>
      <br />
      <CardElement />
      <br />
      <button type="submit" disabled={!stripe}>
        Submit
      </button>
    </form>
  );
};

const StripeCardForm = () => (
  <Elements stripe={stripePromise}>
    <CardForm />
  </Elements>
);

export default StripeCardForm;
