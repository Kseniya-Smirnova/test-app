import { EXCLUDED_FIELDS, FIELDS_DESCRIPTOR } from '../constants';

const calculateSortedFields = (array) => {
    return array.filter(key => !EXCLUDED_FIELDS.includes(key))
        .sort((a, b) => {
            if (FIELDS_DESCRIPTOR[a] && FIELDS_DESCRIPTOR[a].priority) {
                return -1;
            }
            return a.localeCompare(b)
        });
};

export {
    calculateSortedFields,
};