import React from 'react';
import TableHeader from '../tableHeader/TableHeader';
import TableRow from '../tableRow/TableRow';

import './TableContent.scss';

const TableContent = (props) => {
    const rowContents = props.requiredFields.map((key) => <TableRow
        field = { key }
        key = { key }
        products = { props.products }
        component = { props.itemComponents[key] } />);

    return (
        <>
            <TableHeader products = {props.products} click = { props.click } filters = { props.filters } />
            <tbody>{ rowContents }</tbody>
        </>
    )
};

export default TableContent;