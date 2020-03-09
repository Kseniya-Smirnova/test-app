import React from 'react';
import './TableRow.scss';

const TableRow = (props) => {
    const contentItemsData = props.products.map(product => product[props.field]);
    const uniqueItems = new Set(contentItemsData);
    const isSelected = uniqueItems.size <= 1 && props.field !== 'badges';
    return (
        <tr className={isSelected ? 'selected' : ''}>
            <td>{ props.field }</td>
            { contentItemsData.map((item, i) => <InfoItem
                key = {`tableRow_${i}`}
                component = { props.component }
                content = { item } />
            )}
        </tr>
    )
};

const InfoItem = (props) => {
    const content = props.component && props.component(props.content) || props.content;
    return (
        <td>{ content }</td>
    )
};

export default TableRow;