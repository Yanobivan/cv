import React from 'react';

import './styles/normalize.css';
import './styles/App.scss';

import { Header } from './components/Header/Header';
import { GridLayout } from './components/GridLayout/GridLayout';
import { Box } from '@material-ui/core';
import { Card } from './components/Card/Card';

const footerStyles = {
  backgroundColor: '#00BFFF',
  height: '200px',
  width: '100%',
};

const App = () => {
  return (
    <>
      <div className="app">
        <Header />
        <GridLayout>
          <Card caption="project 1" />
          <Card caption="project 2" />
          <Card caption="project 3" />
          <Card caption="project 4" />
          <Card caption="project 5" />
          <Card caption="project 6" />
          <Card caption="project 7" />
        </GridLayout>
        <Box style={footerStyles}></Box>
      </div>
    </>
  );
};

export default App;
