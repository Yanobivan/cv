import React from 'react';

import { Slide, useScrollTrigger } from '@material-ui/core';

interface HideOnScrollProps {
  window?: () => Window;
  children: React.ReactElement;
}

export function HideOnScroll(props: HideOnScrollProps) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const toBot = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    left: 0,
    behavior: 'smooth',
  });
};
