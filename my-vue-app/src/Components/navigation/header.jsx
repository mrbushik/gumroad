import React from "react";

const Header = ({ onToggle }) => {
  return (
    <header>
      <div className="container">
        <div className="header__container">
          <h1>SEEDUNION</h1>
          <span onClick={onToggle}>Start Selling</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
