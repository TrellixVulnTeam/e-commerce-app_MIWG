import React, { FC } from 'react';
import searchIcon from '../../assets/images/search-icon.svg';
import NavBar from '../nav-bar/NavBar';
import './style.scss';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  return (
    <header className="header">
      <p className="header__logo">
        <Link to="/">Caped</Link>
      </p>
      <div className="header__search">
        <img src={searchIcon} alt="Search Icon" />
        <input type="text" />
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
