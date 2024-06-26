import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CardForm from './CardForm';

const stripePromise = loadStripe('your-publishable-key-here');

const StripeCardForm = () => (
  <Elements stripe={stripePromise}>
    <CardForm />
  </Elements>
);

export default StripeCardForm;
