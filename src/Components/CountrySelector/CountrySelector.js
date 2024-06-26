import React from 'react';
import './CountrySelector.module.scss'

const CountrySelector = ({ country, handleCountryChange }) => (
  <label>
    Country:
    <select value={country} onChange={handleCountryChange}>
      <option value="PL">Polska</option>
      <option value="US">USA</option>
    </select>
  </label>
);

export default CountrySelector;
