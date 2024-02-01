import React from 'react';
import './button.css'; 
const Button = ({ type, onClick, children }) => {
  return (
    <button type={type} className="button-style" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
