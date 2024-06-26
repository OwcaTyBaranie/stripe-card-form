import React from 'react';
import styles from './SubmitButton.module.scss'

const SubmitButton = ({ disabled }) => (
  <button type="submit" className={styles.submitButton} disabled={disabled}>
    Submit
  </button>
);

export default SubmitButton;
