import React from 'react';
import '../../styles/Card.scss';

interface CardProps {
  children?: React.ReactNode;
  caption?: string;
  image?: boolean;
}

export const Card: React.FC<CardProps> = ({ ...props }) => {
  const { image, caption } = props;
  return (
    <>
      <div className="card__box">
        {image ?? (
          <div className="card__divider">
            <p>IN PROGRESS</p>
          </div>
        )}
        {caption ? <p className="card__caption">{caption}</p> : null}
      </div>
    </>
  );
};
