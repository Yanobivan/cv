import React from 'react';
import { Box } from '@material-ui/core';

interface CardProps {
  children?: React.ReactNode;
  signature?: string;
  image?: string;
}

const cardStyle: React.CSSProperties = {
  width: '400px',
  height: '500px',
  backgroundColor: 'red',
  marginBottom: '15px',
  marginRight: '15px',
};

export const Card: React.FC<CardProps> = ({ ...props }) => {
  return (
    <>
      <Box style={cardStyle} className="card__box"></Box>
    </>
  );
};
