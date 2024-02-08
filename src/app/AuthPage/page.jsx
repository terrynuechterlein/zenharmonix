"use client";
import React, {useState} from "react";
import "./authpage.css";
import {
  BlackHoverBtn,
  WhiteToBlackBtn,
  WhiteOutlineBtn,
} from "../../Components/Button";
import Image from "next/image";
import Link from "next/link";
import StatefulTabs from "../../Components/StatefulTabs";

const AuthPage = () => {
  const [activeForm, setActiveForm] = useState("signUp");

  const handleSignup = async (event) => {
    event.preventDefault();
    const userData = {
      email: event.target.email.value,
      username: event.target.username.value,
      password: event.target.password.value,
    };

    const response = await fetch("http://localhost:8081/api/v1/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      console.log("Signup successful");
      setActiveForm("signIn");
    } else {
      console.error("Signup failed");
    }
  };

  const handleSignin = async (event) => {
    event.preventDefault();
    const userData = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    const response = await fetch("http://localhost:8081/api/v1/user/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      console.log("Signin successful");
      // Redirect to Dashboard page
      window.location.href = "/Dashboard"; 
    } else {
      console.error("Signin failed");
    }
  };

  return (
    <div className="container_auth">
      <h1 className="auth__title">Zen Harmonix</h1>
      <div className="auth__logo">
        <Image src="/assets/logo3.png" alt="Logo" width={100} height={100} />
      </div>

      <div
        className={
          activeForm === "signUp"
            ? "auth__form form__signup"
            : "auth__form form__signin"
        }>
        <StatefulTabs activeForm={activeForm} setActiveForm={setActiveForm} />

        {activeForm === "signUp" ? (
          <form onSubmit={handleSignup}>
            <div className="form__input-group">
              <input type="email" name="email" placeholder="Email" />
              <input type="text" name="username" placeholder="Username" />
              <input type="password" name="password" placeholder="Password" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
              <div className="form__button">
                <WhiteToBlackBtn type="submit">Create Account</WhiteToBlackBtn>
              </div>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSignin}>
            <div className="form__input-group">
              <input type="email" name="email" placeholder="Email" />
              <input type="password" name="password" placeholder="Password" />
              <div className="form__button">
                <WhiteToBlackBtn type="submit">Login</WhiteToBlackBtn>
              </div>
              <div className="form__forgot-text">
                <Link
                  href="/forgot-password"
                  className="forgot-text__forgot-link">
                  Forgot password?
                </Link>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
