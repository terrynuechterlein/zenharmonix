'use client';
import React, { useState } from "react";
import "./authpage.css";
import {BlackHoverBtn, WhiteToBlackBtn, WhiteOutlineBtn}  from "../../Components/Button";
import Image from "next/image";
import Link from "next/link";
import StatefulTabs from "../../Components/StatefulTabs"; 

const AuthPage = () => {
  const [activeForm, setActiveForm] = useState('signUp');

  return (
    <div className="container_auth">
      <h1 className="auth__title">Zen Harmonix</h1>
      <div className="auth__logo">
        <Image src="/assets/logo3.png" alt="Logo" width={100} height={100} />
      </div>
      
      <div className={activeForm === 'signUp' ? "auth__form form__signup" : "auth__form form__signin"}>
        <StatefulTabs activeForm={activeForm} setActiveForm={setActiveForm} />

        {activeForm === 'signUp' ? (
          <div className="form__input-group">
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
          </div>
        ) : (
          <div className="form__input-group">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
          </div>
        )}
        <div className="form__button">
          <WhiteToBlackBtn type="button">{activeForm === 'signUp' ? 'Create Account' : 'Login'}</WhiteToBlackBtn>
        </div>
        {activeForm === 'signIn' && (
          <div className="form__forgot-text">
            <Link href="/forgot-password" className="forgot-text__forgot-link">Forgot password?</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
