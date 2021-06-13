import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IProductItem } from '../../../interfaces';
import './style.scss';

type TParams = { id: string | undefined };

const ProductInfo: FC<RouteComponentProps<TParams>> = ({ match }) => {
  const product = productItems.find(
    (item: IProductItem) => item.id === match.params.id
  );
  return (
    <div className="product-info">
      <div className="product-info__gallery">
        <div className="product-info__gallery-column">
          <img src={product?.image} alt="" />
          <img src={product?.image} alt="" />
          <img src={product?.image} alt="" />
          <img src={product?.image} alt="" />
          <img src={product?.image} alt="" />
        </div>
        <img src={product?.image} alt="" />
      </div>
      <div className="product-info__content">
        <h3 className="product-info__name">{product?.name}</h3>
        <h4 className="product-info__description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          repellat nam rem dolore mollitia facere ipsa minus, deserunt in saepe
          accusantium exercitationem quibusdam pariatur iusto reiciendis aliquid
          praesentium enim dignissimos!
        </h4>
        <div className="product-info__reviews">
          <p className="product-info__reviews-text">6 reviews</p>
          <div className="product-info__reviews-stars"></div>
        </div>
        <div className="product-info__price">{product?.price}</div>
        <div className="product-info__colors">
          <div className="product-info__color"></div>
        </div>
        <div className="product-info__sizes">
          <div className="product-info__size"></div>
        </div>
        <div className="product-info__quantity">
          <p className="product-info__plus">+</p>
          <p className="product-info__num">1</p>
          <p className="product-info__minus">-</p>
        </div>
        <div className="product-info__state">State</div>
        <button className="product-info__button-bag">Add to bag</button>
        <button className="product-info__button-wishlist">
          Add to wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
