import React from 'react';

import '../styles/normalize.css';
import '../styles/app.scss';

import { Container } from '@mui/material';
import Header from './Header';

const App = () => {
  return (
    <>
      <Header></Header>
      <Container maxWidth="lg" sx={{ backgroundColor: '#6856FF', height: '1000px' }}></Container>
    </>
  );
};

export default App;
