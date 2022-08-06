import React from 'react'
//This is where I got code for this button because I had a hard time figuring out
//How to do this in TS and Functional React. Turns out I had to define the Props interface
// And use React.FC
https://www.twilio.com/blog/intro-custom-button-component-typescript-react

interface Props {
  border?: string;
  children?: React.ReactNode;
  height?: string;
  onClick: () => void;
  width?: string;
}

const Button: React.FC<Props> = ({
  border,
  children,
  height = '50px',
  onClick,
  width = '50px'
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        border,
        height,
        width,
      }}
    >
      {children}
    </button>
  );
}
export default Button;