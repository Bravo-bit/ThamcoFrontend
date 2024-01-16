import { useState } from "react";
import { Outlet } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import Header from "../components/Layout/Header";
import MainNavigation from "../components/MainNavigation";
import CartProvider from "../components/store/CartProvider";


function RootLayout() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <MainNavigation></MainNavigation>
        <main>
          <Outlet></Outlet>
        </main>
      </>
    </CartProvider>
  );
}

export default RootLayout;
