/* REDUCER: defineshow many products related state slice will look like */
import PRODUCTS from '../../data/dummy-data';

const initialState = {
    availableProducts: PRODUCTS, // All products / product that didn't create so we can't buy our own products
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1') // ID of currently logged user
};

export default ( state = initialState, action) => {    
    return state;
};