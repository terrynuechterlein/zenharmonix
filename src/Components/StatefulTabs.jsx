"use client";
import React from "react";
import "./statefultabs.css";

const StatefulTabs = ({ activeTab, setActiveTab, tabTitles }) => {
  return (
    <div className="tabs">
      {tabTitles.map((title, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(title.toLowerCase())}
          className={activeTab === title.toLowerCase() ? 'active' : ''}>
          {title}
        </button>
      ))}
    </div>
  );
};

export default StatefulTabs;
