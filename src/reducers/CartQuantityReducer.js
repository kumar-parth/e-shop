const INITIAL_STATE = 0;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CART_QUANTITY':
            return action.payload;
        default:
            return state;
    }
};
