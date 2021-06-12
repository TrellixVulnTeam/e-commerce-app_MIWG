import React from 'react';
import Header from '../header/Header';
import './style.scss';
import HomePage from '../pages/home-page/HomePage';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
