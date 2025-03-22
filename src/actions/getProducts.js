export const getProducts = () => {
  return (dispatch) => {
    return fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        console.log("All products:::", data);
        dispatch({ type: "PRODUCT_LIST", payload: data.products });
      });
  };
};
