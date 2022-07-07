import React from 'react';
import { Box } from '@material-ui/core';
import '../../styles/gridLayout.scss';

interface GridLayoutProps {
  children?: React.ReactNode;
}

export const GridLayout: React.FC<GridLayoutProps> = ({ ...props }) => {
  return (
    <>
      <Box className="grid__box">{props.children}</Box>
    </>
  );
};
