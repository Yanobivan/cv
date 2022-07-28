import React from 'react';

import { Slide, useScrollTrigger } from '@material-ui/core';

interface HideOnScrollProps {
  window?: () => Window;
  children: React.ReactElement;
  disabled?: boolean;
}

export function HideOnScroll(props: HideOnScrollProps) {
  const { children, window, disabled } = props;
  const trigger = !disabled
    ? useScrollTrigger({
        target: window ? window() : undefined,
      })
    : false;

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const toBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    left: 0,
    behavior: 'smooth',
  });
};

export const addBorder = (isBorder: boolean, callback: (isBorder: boolean) => void) => {
  callback(isBorder);
};
