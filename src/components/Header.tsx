import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store.ts';

import Cart from './Cart.tsx';

export default function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const items = useSelector((state: RootState) => state.cart.items);


  function handleOpenCartClick() {
    setCartIsVisible(true);
  }

  function handleCloseCartClick() {
    setCartIsVisible(false);
  }

  return (
    <>
      {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Redux</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({items.length})</button>
        </p>
      </header>
    </>
  );
}
