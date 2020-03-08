import { combineReducers } from 'redux';
import products from './productsReducer';
import filter from './filterReducer';

const routeApp = combineReducers({
    products,
    filter,
});

export default routeApp;
