import React from 'react';
import './CardholderName.module.scss'
const CardholderName = ({ cardholderName }) => (
  <label>
    Cardholder Name:
    <input type="text" value={cardholderName} readOnly />
  </label>
);

export default CardholderName;
