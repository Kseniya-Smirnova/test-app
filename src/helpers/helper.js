import { EXCLUDED_FIELDS, FIELDS_DESCRIPTOR } from '../constants';

/**
 * Sort collection by priority or alphabet
 *
 * @param  {Array} array collection of items
 * @return {Array} array
 */
const calculateSortedFields = (array) => {
    return array.filter(key => !EXCLUDED_FIELDS.includes(key))
        .sort((a, b) => {
            if (FIELDS_DESCRIPTOR[a] && FIELDS_DESCRIPTOR[a].priority) {
                return -1;
            }
            return a.localeCompare(b)
        });
};

/**
 * Add random id to every item in collection
 *
 * @param  {Array} array collection of items
 * @return {Array} array
 */
function addIdToProduct(array) {
    return array.map(item => Object.assign({}, item, { id: Math.random().toString(36).substr(2, 9) }));
}

export {
    calculateSortedFields,
    addIdToProduct,
};