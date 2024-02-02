import React from 'react';
import './button.css'; 
const BlackHoverBtn = ({ type, onClick, children }) => {
  return (
    <button type={type} className="blackbtn-style" onClick={onClick}>
      {children}
    </button>
  );
};

export default BlackHoverBtn;
