import * as Apis from '../services/Apis';

export const getProducts = () => {
    return (dispatch) => {
        return fetch(Apis.getProductsUrl())
            .then(res => res.json())
            .then(data => {
                console.log("All products:::", data);
                dispatch({ type: "PRODUCT_LIST", payload: data });
            });
    }
}