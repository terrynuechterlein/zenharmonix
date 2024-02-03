'use client'
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import BlackHoverBtn from "../../Components/Button";
import { useRouter } from 'next/navigation'
import {Button, ButtonGroup} from "@nextui-org/react";
import "./login.css";

const Login = () => {

  const router = useRouter(); 

  return (
    <div className="login-container">
      <h1 className="login-title">Zen Harmonix</h1>{" "}

      <div className="logo-container">
        <Image src="/assets/logo3.png" alt="Logo" width={100} height={100} />
      </div>

      <form className="login-form">

        <ButtonGroup className="button-group">
          <BlackHoverBtn type="button" className="left-button" onClick={() => router.push('/SignUp')}>Sign Up</BlackHoverBtn>
          <BlackHoverBtn type="button" className="right-button">Login</BlackHoverBtn>
        </ButtonGroup>

        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />

        {/*This doesn't go anywhere yet, just puts you back at Login*/}
        <div className="button-container">
        <BlackHoverBtn type="button" onClick={() => router.push('/Login')}>Login</BlackHoverBtn></div>

      </form>

      {/*This doesn't do anything yet*/}
      <div className="forgot-text">
        <Link href="/Login" className="forgot-link">Forgot password?</Link>
      </div>
    </div>
  );
};

export default Login