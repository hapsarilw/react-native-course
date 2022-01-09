/* REDUCER: defineshow many products related state slice will look like */
import PRODUCTS from "../../data/dummy-data";
import {
  DELETE_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
} from "../actions/products";
import Product from "../../models/product";

const initialState = {
  availableProducts: PRODUCTS, // All products / product that didn't create so we can't buy our own products
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === "u1"), // ID of currently logged user
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      const newProduct = new Product(
        new Date().toString(),
        "u1",
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        action.productData.price
      );
      return {
        ...state,
        availableProducts: state.availableProducts.concat(newProduct),
        userProducts: state.userProducts.concat(newProduct),
      };
    case UPDATE_PRODUCT:
      const productIndex = state.userProducts.findIndex(
        (prod) => prod.id === action.pid
      );
      const updatedProduct = new Product(
        // using state to keep the original value
        action.pid,
        state.userProducts[productIndex],
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,                
        state.userProducts[productIndex].price
      );
      // Replace existing product with updated & available product
      const updatedUserProducts = [...state.userProducts];
      updatedUserProducts[productIndex] = updatedProduct;      
      const availableProductIndex = state.availableProducts.findIndex(
        (prod) => prod.id === action.pid
      );
      const updatedAvailableProducts = [...state.availableProducts];
      updatedAvailableProducts[availableProductIndex] = updatedProduct;
      return {
        ...state,
        availableProducts: updatedAvailableProducts,
        userProducts: updatedUserProducts
      }
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
