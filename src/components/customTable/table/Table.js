import React from 'react';
import TableContent from '../tableContent/TableContent';
import './Table.scss';

const Table = (props) => {
    const { requiredFields, products, itemComponents } = props.tableConfig;

    return (
        <table className='products'>
            <caption>{products.length} producten vergelijken</caption>
            <TableContent
                products = { products }
                requiredFields = { requiredFields }
                click = { props.click }
                filters = { props.filters }
                itemComponents = { itemComponents }  />
        </table>
    )
};

export default Table;