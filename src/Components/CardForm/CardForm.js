import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'; // Import CardElement
import CountrySelector from './CountrySelector';
import CardholderName from './CardholderName';
import CardInput from './CardInput';
import SubmitButton from './SubmitButton';

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
      <CountrySelector country={country} handleCountryChange={handleCountryChange} />
      <CardholderName cardholderName={cardholderName} />
      <CardInput />
      <SubmitButton disabled={!stripe} />
    </form>
  );
};

export default CardForm;
