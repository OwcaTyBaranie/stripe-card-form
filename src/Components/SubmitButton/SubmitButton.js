import React from 'react';
import './SubmitButton.module.scss'

const SubmitButton = ({ disabled }) => (
  <button type="submit" disabled={disabled}>
    Submit
  </button>
);

export default SubmitButton;
