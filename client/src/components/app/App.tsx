import React from 'react';
import Header from '../header/Header';
import './style.scss';
import HomePage from '../pages/home-page/HomePage';
import ProductsPage from '../pages/products-page/ProductsPage';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ProductInfo from '../pages/product-info/ProductInfo';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main">
          <Switch>
            <Route exact path="/" render={(props) => <HomePage />} />
            <Route
              exact
              path="/products/:id"
              render={(props) => <ProductInfo {...props} />}
            />
            <Route path="/products" render={(props) => <ProductsPage />} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
