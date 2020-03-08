import { productsAction } from '../actions';

// in this task 'loading', 'error' field not used (the same corresponding actions)
// but I put it here, because they could be useful for some goals (displaying loader, showing errors)
// if something goes wrong
const initialState = {
    products: [],
    loading: false,
    error: null
};

const products = (state = initialState, action) => {
    switch (action.type) {
        case productsAction.begin:
            return {
                ...state,
                loading: true,
                error: null
            };
        case productsAction.success:
            return {
                ...state,
                loading: false,
                products: action.payload.data || [],
            };
        default:
            return state;
    }
};

export default products;