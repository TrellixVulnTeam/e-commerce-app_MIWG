import React, { FC } from 'react';
import './style.scss';
import girlImage from '../../../assets/images/girl.jpg';

const HomePage: FC = () => {
  return (
    <div className="homepage">
      <div className="homepage__cards cards">
        <div className="cards__row">
          <div className="cards__column discount-cards">
            <div className="discount-cards__item">get up to 50% off</div>
            <div className="discount-cards__item"> get up to 50% off</div>
          </div>
          <div className="cards__column people-cards">
            <div className="people-cards__item">
              <div className="dummy"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
