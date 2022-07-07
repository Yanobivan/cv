import React from 'react';

import './styles/normalize.css';
import './styles/App.scss';

import { Header } from './components/Header/Header';
import { GridLayout } from './components/GridLayout/GridLayout';
import { Box } from '@material-ui/core';
import { Card } from './components/Card/Card';

const footerStyles = {
  backgroundColor: '#00BFFF',
  border: '2px red solid',
  height: '400px',
  width: '100%',
};

export function GridItem() {
  return (
    <>
      <div
        style={{
          backgroundColor: '#00BFFF',
          border: '2px red solid',
          height: '400px',
          width: '500px',
          minWidth: '200px',
          marginLeft: '15px',
          marginBottom: '15px',
        }}
        className="card"
      ></div>
    </>
  );
}

const App = () => {
  return (
    <>
      <Header />
      <GridLayout>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </GridLayout>
      <Box style={footerStyles}></Box>
    </>
  );
};

export default App;
