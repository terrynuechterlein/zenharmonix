import React from 'react';
import './button.css'; 
const BlackHoverBtn = ({ type, onClick, children }) => {
  return (
    <button type={type} className="blackbtn-style" onClick={onClick}>
      {children}
    </button>
  );
};

const WhiteOutlineBtn = ({ type, onClick, children }) => {
  return (
    <button type={type} className="whiteOutlinebtn-style" onClick={onClick}>
      {children}
    </button>
  );
};

const WhiteToBlackBtn = ({ type, onClick, children }) => {
  return (
    <button type={type} className="whiteToBlackbtn-style" onClick={onClick}>
      {children}
    </button>
  );
};

export { BlackHoverBtn, WhiteOutlineBtn, WhiteToBlackBtn  };