import { filterActions } from '../actions';

const initialState = [];

const filter = (state = initialState, action) => {
    switch (action.type) {
        case filterActions.toggle:
            if (state.includes(action.payload)) {
                return state.filter(item => item !== action.payload)
            }
            return [...state, action.payload];
        case filterActions.clear:
            return initialState;
        default:
            return state;
    }
};

export default filter;