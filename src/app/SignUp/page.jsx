'use client'
import React from "react";
import "./signup.css";
import BlackHoverBtn from "../../Components/Button";
import Image from "next/image";
import {Button, ButtonGroup} from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from 'next/navigation'

const SignUp = () => {
  const router = useRouter(); 

  // const handleButtonClick = () => {
  //   router.push('/Login'); // Use router.push to navigate
  // };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Zen Harmonix</h1>{" "}

      <div className="logo-container">
        <Image src="/assets/logo3.png" alt="Logo" width={100} height={100} />
      </div>

      <form className="signup-form">

        <ButtonGroup className="button-group">
          <BlackHoverBtn type="button" className="left-button">Sign Up</BlackHoverBtn>
          <BlackHoverBtn type="button" className="right-button" onClick={() => router.push('/Login')}>Login</BlackHoverBtn>
        </ButtonGroup>

        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

        <div className="button-container">
        <BlackHoverBtn type="button" onClick={() => router.push('/Login')}>Create Account</BlackHoverBtn>

        </div>
      </form>
 
    </div>
  );
};

export default SignUp;
