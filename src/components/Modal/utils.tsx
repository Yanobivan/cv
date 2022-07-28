export const setOverflow = (isOverflow: boolean) => {
  const bodyOverflow = isOverflow ? 'hidden' : 'hidden visible';
  document.body.style.overflow = bodyOverflow;
  const overflowWidth = 'scrollbar-width';

  if (isOverflow) {
    document.body.classList.add(overflowWidth);
  } else {
    document.body.classList.remove(overflowWidth);
  }
};
