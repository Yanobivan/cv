import React, { ReactNode, useState } from 'react';

import './styles/normalize.css';
import './styles/App.scss';

import { Header } from './components/Header/Header';
import { GridLayout } from './components/GridLayout/GridLayout';
import { Card } from './components/Card/Card';
import { Footer } from './components/Footer/Footer';

interface dataCardProps {
  caption: string;
}

const dataCard: dataCardProps[] = [
  { caption: 'project 1' },
  { caption: 'project 2' },
  { caption: 'project 3' },
  { caption: 'project 4' },
];

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <GridLayout>
        {dataCard.map((card): ReactNode => {
          return <Card caption={card.caption} />;
        })}
      </GridLayout>
      <Footer />
    </div>
  );
};

export default App;
