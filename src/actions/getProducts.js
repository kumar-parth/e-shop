import * as Apis from "../services/Apis";

export const getProducts = () => {
  return (dispatch) => {
    return fetch("/data/productList.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("All products:::", data);
        dispatch({ type: "PRODUCT_LIST", payload: data });
      });
  };
};
