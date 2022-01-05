/* REDUCER: defineshow many products related state slice will look like */
import PRODUCTS from "../../data/dummy-data";
import { DELETE_PRODUCT } from "../actions/products";

const initialState = {
  availableProducts: PRODUCTS, // All products / product that didn't create so we can't buy our own products
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === "u1"), // ID of currently logged user
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      return {
        ...state,
        userProducts: state.userProducts.filter(
          (product) => product.id !== action.pid
        ), // Choosing unselected deleted id
        availableProducts: state.availableProducts.filter(
          (product) => product.id !== action.pid
        ), // Choosing unselected deleted id
      };
  }
  return state;
};
