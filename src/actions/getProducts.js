import * as Apis from '../services/Apis';

export const getProducts = () => {
    return (dispatch) => {
        return fetch("http://localhost:3000/e-shop/data/productList.json")
            .then(res => res.json())
            .then(data => {
                console.log("All products:::", data);
                dispatch({ type: "PRODUCT_LIST", payload: data });
            });
    }
}