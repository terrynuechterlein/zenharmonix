// Tag.jsx
import React from 'react';
import "./tag.css";

const Tag = ({ text, onRemove }) => {
  return (
    <div className="tag">
      {text}
      <button onClick={onRemove} className="remove-tag">x</button>
    </div>
  );
};

export default Tag;
