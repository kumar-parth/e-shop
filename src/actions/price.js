export const setMinPrice = (minPrice) => {
    console.log("Min Price === ", minPrice);
    return {
        type: 'MIN_PRICE',
        payload: minPrice
    };
};

export const setMaxPrice = (maxPrice) => {
    console.log("Max Price === ", maxPrice);
    return {
        type: 'MAX_PRICE',
        payload: maxPrice
    };
};

export const setPrevMinPrice = (prevMinPrice) => {
    console.log("Prev Min Price === ", prevMinPrice);
    return {
        type: 'PREV_MIN_PRICE',
        payload: prevMinPrice
    };
};

export const setPrevMaxPrice = (prevMaxPrice) => {
    console.log("Prev Max Price === ", prevMaxPrice);
    return {
        type: 'PREV_MAX_PRICE',
        payload: prevMaxPrice
    };
};

export const setPriceFilterApplyClicked = (isApplyClicked) => {
    return {
        type: 'PRICE_APPLY_CLICKED',
        payload: isApplyClicked
    };
};