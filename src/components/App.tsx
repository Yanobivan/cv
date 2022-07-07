import React from 'react';

import '../styles/normalize.css';
import '../styles/app.scss';

import { Header } from './Header/Header';
import { GridLayout } from './GridLayout/GridLayout';
import { Box } from '@material-ui/core';

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
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
      </GridLayout>
      <Box style={footerStyles}></Box>
    </>
  );
};

export default App;
