import React, { FC, useState, useEffect } from 'react';
import Sidebar from '../../side-bar/Sidebar';
import './style.scss';
import { Link } from 'react-router-dom';
import { IProductItem } from '../../../interfaces';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import { fetchProducts } from '../../../redux/actions/getProducts';

const ProductsPage: FC = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state: RootState) => state.products);

  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const renderProducts = () => {
    return products?.map((item: IProductItem) => {
      return (
        <div key={item.id} className="products__item">
          <Link to={`/products/${item.id}`}>
            <div className="products__image">
              <img
                src={`data:image/jpeg;base64, ${item.image}`}
                alt="Product"
              />
            </div>
          </Link>
          <div className="products__info">
            <div className="products__name">{item.name}</div>
            <div className="products__price">{item.price}</div>
          </div>
          <Link to={`/products/${item.id}`}>
            <button className="products__button">View</button>
          </Link>
          <button className="products__button">Add to cart</button>
        </div>
      );
    });
  };
  return (
    <div className="products">
      <div className="products__container">
        <Sidebar />
        <div className="products__content">
          <div className="products__items">{renderProducts()}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
