import React from 'react';
import lightningIcon from '../../assets/images/lightning-icon.png';
import activeIcon from '../../assets/images/active-icon.png';
import accesoriesIcon from '../../assets/images/accesories-icon.png';
import brilliantIcon from '../../assets/images/brilliant-icon.png';
import clothingIcon from '../../assets/images/clothing-icon.png';
import shoesIcon from '../../assets/images/shoes-icon.png';
import giftIcon from '../../assets/images/gifts-icon.png';
import './style.scss';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__title">Explore</div>
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <img src={lightningIcon} alt="" /> <p>New In</p>
        </li>
        <li className="sidebar__item">
          <img src={clothingIcon} alt="" /> <p>Clothing</p>
        </li>
        <li className="sidebar__item">
          <img src={shoesIcon} alt="" /> <p>Shoes</p>
        </li>
        <li className="sidebar__item">
          <img src={accesoriesIcon} alt="" /> <p>Accessories</p>
        </li>
        <li className="sidebar__item">
          <img src={activeIcon} alt="" /> <p>Activewear</p>
        </li>
        <li className="sidebar__item">
          <img src={giftIcon} alt="" /> <p>Gifts and Living</p>
        </li>
        <li className="sidebar__item">
          <img src={brilliantIcon} alt="" /> <p>Inspiration</p>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
