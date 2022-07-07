import React from 'react';
import '../../styles/gridLayout.scss';

interface GridLayoutProps {
  children?: React.ReactNode;
}

export const GridLayout: React.FC<GridLayoutProps> = ({ ...props }) => {
  return (
    <>
      <div className="grid__box">{props.children}</div>
    </>
  );
};
