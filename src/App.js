import React from 'react';
import StripeCardForm from './Components/StripeCardForm/StripeCardForm';
import styles from './App.module.scss';
import Header from './Components/Header/Header';
import Container from './Components/Container/Container';
import Footer from './Components/Footer/Footer';

const App = () => (

  <div className={styles.root}>
  <Header />
  <Container>

    <StripeCardForm />
    </Container>
    <Footer />
  </div>
);

export default App;
