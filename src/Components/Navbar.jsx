'use client';
import React from 'react';
import Image from 'next/image';
import StatefulTabs from "../Components/StatefulTabs";
import "./navbar.css";

function Navbar () {
    return (
        <nav>
            <a className="nav__logo">
                <Image src="/assets/logo3.png" alt="Logo" width={100} height={100} />
            </a>
            <StatefulTabs className="tabs">My Feed</StatefulTabs>
            <div>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Saved</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
