import React from 'react';
import '../../styles/Modal.scss';
import { setOverflow } from './utils';

type PopupProps = {
  active: boolean;
  setActive: (arg: boolean) => void;
  children?: React.ReactNode;
};

export const Modal: React.FC<PopupProps> = ({ ...props }) => {
  const { active, setActive, children } = props;
  setOverflow(active);

  return (
    <>
      {active && (
        <div className="modal" onClick={() => setActive(false)}>
          <div className="modal__content" onClick={(event) => event.stopPropagation()}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
