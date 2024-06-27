import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CardForm from '../CardForm/CardForm';

const stripePromise = loadStripe('your-publishable-key-here');
const elementsOptions = {
  locale: 'eg' // zmiana języka na polski (pl) lub angielski (en)
};

const StripeCardForm = () => (
  <Elements stripe={stripePromise} options={elementsOptions}>
    <CardForm />
  </Elements>
);

export default StripeCardForm;
