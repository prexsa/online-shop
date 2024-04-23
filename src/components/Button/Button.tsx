import React from 'react';

interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string;
  width: string;
  type: string;
}

const Button = ({ type, border, color, children, height, onClick, radius, width }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{ backgroundColor: color, border, borderRadius: radius, height, width }}
    >
      {children}
    </button>
  );
};

export default Button;
