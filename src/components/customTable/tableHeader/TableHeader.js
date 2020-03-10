import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

import './TableHeader.scss';

const TableHeader = (props) => {
    const headerContent = props.products.map((product) =>
        <th key = { product.id }>
            <span onClick = {(e) => {props.click(product.id, e)}}><FaTrashAlt /></span>
            <div className='image'><img src={product.productImage} alt='product' /></div>
            <div className='name'>{product.name}</div>
            <div className='price'>{product.salePrice}</div>
            <div className='details'>per stuck/excl. btw</div>
        </th>
    );
    return (
        <thead>
            <tr>
                <th>{props.filters}</th>
                {headerContent}
            </tr>
        </thead>
    )
};

export default TableHeader;