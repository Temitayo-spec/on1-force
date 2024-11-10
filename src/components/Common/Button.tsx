import React from 'react';

const Button = ({
  className,
  onClick,
  type,
  text,
}: {
  className: string;
  onClick?: () => void;
  type: 'button' | 'reset' | 'submit';
  text: string;
}) => {
  return (
    <button
      className={`bg-force_peach text-base py-3 px-6 rounded-[2.125rem] ${className}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
