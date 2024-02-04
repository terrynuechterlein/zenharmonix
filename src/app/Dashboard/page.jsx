'use client';
import React, { useState } from "react";
import "./dashboard.css";
import {BlackHoverBtn, WhiteToBlackBtn, WhiteOutlineBtn}  from "../../Components/Button";
import Image from "next/image";
import Navbar from "../../Components/Navbar"; 
import Link from "next/link";
import {useRouter} from 'next/navigation';

const Dashboard = () => {

  return (
    <div className="container_dashboard">
      <Navbar></Navbar>
    </div>
  );
};

export default Dashboard;
