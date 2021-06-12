import React, { FC } from 'react';
import searchIcon from '../../assets/images/search-icon.svg';
import NavBar from '../nav-bar/NavBar';
import './style.scss';

const Header: FC = () => {
  return (
    <header className="header">
      <p className="header__logo">Caped</p>
      <div className="header__search">
        <img src={searchIcon} alt="Search Icon" />
        <input type="text" />
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
