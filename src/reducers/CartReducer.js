const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CART_ITEM':
            return [...state, action.payload];
        case 'UPDATE_CART':
            state = [];
            let newState = action.payload;
            return [...state, ...newState];
        default:
            return state;
    }
};
