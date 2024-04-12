'use client';
import React from 'react';
import "./authtabs.css";

const AuthTabs = ({ activeForm, setActiveForm }) => {
  return (
    <div className="tabs">
      <button onClick={() => setActiveForm('signUp')} className={activeForm === 'signUp' ? 'active' : ''}>Sign Up</button>
      <button onClick={() => setActiveForm('signIn')} className={activeForm === 'signIn' ? 'active' : ''}>Sign In</button>
    </div>
  );
};

export default AuthTabs;