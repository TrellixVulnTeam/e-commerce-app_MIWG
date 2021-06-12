import React, { FC } from 'react';
import './style.scss';

const NavBar: FC = () => {
  return (
    <nav className="nav">
      <div className="nav__list">
        <li className="nav__item">products</li>
        <li className="nav__item">story</li>
        <li className="nav__item">manufacturing</li>
        <li className="nav__item">packaging</li>
        <li className="nav__item">cart</li>
        <li className="nav__item">login</li>
      </div>
    </nav>
  );
};

export default NavBar;
