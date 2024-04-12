"use client";
import React from "react";
import Image from "next/image";
import StatefulTabs from "../Components/StatefulTabs";
import "./navbar.css";

const Navbar = ({tabTitles, activeTab, setActiveTab}) => {
  return (
    <nav>
      <a className="nav__logo">
        <Image src="/assets/logo3.png" alt="Logo" width={100} height={100} />
      </a>
      {tabTitles && (
        <StatefulTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabTitles={tabTitles}
        />
      )}
      <div>
        <ul>
          <li>
            <a>Account</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
