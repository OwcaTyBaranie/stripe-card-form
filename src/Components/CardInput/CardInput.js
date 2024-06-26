import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import './CardInput.module.scss'

const CardInput = () => (
  <div>
    <CardElement />
  </div>
);

export default CardInput;
