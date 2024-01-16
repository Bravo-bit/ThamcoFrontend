import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (productId) => { },
    clearCart: () => { }
});

export default CartContext;