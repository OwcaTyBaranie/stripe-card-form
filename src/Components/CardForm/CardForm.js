import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CountrySelector from '../CountrySelector/CountrySelector';
import CardholderName from '../CardholderName/CardholderName';
import CardInput from '../CardInput/CardInput';
import SubmitButton from '../SubmitButton/SubmitButton';
import styles from './CardForm.module.scss'
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
    <div className={styles.formcontainer} >
      <div className={styles.cardform}>
    <form onSubmit={handleSubmit}>
      <CountrySelector country={country} handleCountryChange={handleCountryChange} />
      <CardholderName cardholderName={cardholderName} />
      <CardInput />
      <SubmitButton disabled={!stripe} />
    </form>
    </div>
    </div>
  );
};

export default CardForm;
