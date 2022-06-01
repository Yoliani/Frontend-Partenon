import React from 'react';

const Text = ({level, weight, family, children, className}) => {
  const sizeMap = {
    1: 'text-2xl',
    2: 'text-xl',
    3: 'text-lg',
    4: 'text-md',
    5: 'text-sm',
    6: 'text-xs',
    7: 'text-xxs',
  };

  return (
    <p
      className={`font-${family} font-${weight} ${sizeMap[level]} ${className}`}
    >
      {children}
    </p>
  );
};

export default Text;
