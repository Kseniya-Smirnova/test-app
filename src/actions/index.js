import { addIdToProduct } from '../helpers/helper';

function fetchData(url, actions) {
    return dispatch => {
        dispatch(fetchBegin(actions.begin));
        return fetch(url)
            .then(data => data.json())
            .then(json => dispatch(fetchSuccess(actions.success, addIdToProduct(json.products))))
            .catch(error =>
                dispatch(fetchFailure(actions.failure, error))
            );
    };
}

const fetchBegin = (type) => ({
    type,
});

const fetchSuccess = (type, data) => ({
    type,
    payload: { data }
});

const fetchFailure = (type, error) => ({
    type,
    payload: { error }
});

export function fetchProducts(url) {
    return fetchData(url, productsAction)
}

export const toggleFilter = (id) => ({
    type: 'TOGGLE_FILTER',
    payload: id,

});

export const clearFilter = () => ({
    type: filterActions.clear,
});

export const productsAction = {
    begin: 'FETCH_BEGIN',
    success: 'FETCH_SUCCESS',
    failure: 'FETCH_FAILURE'
};

export const filterActions = {
    toggle: 'TOGGLE_FILTER',
    clear: 'CLEAR_FILTER'
};