import React from 'react';
interface CommonHeadingProps {
  heading: string;
  className?: string;
}

export const CommonHeading: React.FC<CommonHeadingProps> = ({ heading, className }) => {
  return (
    <h2
      className={`${className} capitalize font-Orbitron text-4xxl font-bold text-center leading-lg text-white`}
    >
      {heading}
    </h2>
  );
};
