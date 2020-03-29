export const setCartItem = (product) => {
    return {
        type: 'SET_CART_ITEM',
        payload: product
    };
};


export const updateCart = (cartItems) => {
    return {
        type: 'UPDATE_CART',
        payload: cartItems
    };
};

export const setTotalCartQuantity = (quantity) => {
    return {
        type: 'SET_CART_QUANTITY',
        payload: quantity
    };
};