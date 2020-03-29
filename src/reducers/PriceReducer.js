const INITIAL_STATE = {
    minPrice: 100,
    maxPrice: 1000,
    prevMinPrice: 100,
    prevMaxPrice: 1000,
    priceFilterApplyClicked: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'MIN_PRICE':
            return {
                ...state,
                minPrice: action.payload
            }
        case 'MAX_PRICE':
            return {
                ...state,
                maxPrice: action.payload
            }
        case 'PREV_MIN_PRICE':
            return {
                ...state,
                prevMinPrice: action.payload
            }
        case 'PREV_MAX_PRICE':
            return {
                ...state,
                prevMaxPrice: action.payload
            }
        case 'PRICE_APPLY_CLICKED':
            return {
                ...state,
                priceFilterApplyClicked: action.payload
            }
        default:
            return state;
    }
};
