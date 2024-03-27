import React from 'react';
import './Header.css';
import LOGO from "./../Assets/triangle-xxl.png"
function Header({ totalTimeSpent }) {
  return (
    <div className="App">
      <header className="header">
        <img src={LOGO}  className="logo" />
        <h1 className="heading">TIME TRACKER</h1>
        <div className="total-time">
          Total Time Spent: <span className="hours">{totalTimeSpent}</span> hours
        </div>
      </header>
    </div>
  );
}

export default Header;
