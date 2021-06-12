import React, { FC } from 'react';
import './style.scss';
import girlImage from '../../../assets/images/girl.jpg';

const HomePage: FC = () => {
  return (
    <div className="homepage">
      <div className="homepage__cards cards">
        <div className="cards__row">
          <div className="cards__column">
            <div className="cards__discount">get up to 50% off</div>
            <div className="cards__discount"> get up to 50% off</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
