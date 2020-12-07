import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Custom CartContext Provider
import CartProvider from './providers/cart/cart.provider';

import './index.css';
import App from './App';

ReactDOM.render(
  // Grant access to CartContext throughout application
  <CartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartProvider>,
  document.getElementById('root')
);
