'use client';
import React, { useState } from "react";
import "./dashboard.css";
import {BlackHoverBtn, WhiteToBlackBtn, WhiteOutlineBtn}  from "../../Components/Button";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from 'next/navigation';

const Dashboard = () => {

  return (
    <div className="container_dashboard">
        <h1 className="dash__title">Temp</h1>
        <div className="dash__logo">
            <Image src="/assets/logo3.png" alt="Logo" width={100} height={100} />
        </div>
    </div>
  );
};

export default Dashboard;
