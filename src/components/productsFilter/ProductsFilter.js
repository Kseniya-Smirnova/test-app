import React from 'react';

import './ProductFilter.scss';

// it could be in separate file, but in term of the task I left it here
const ProductItem = (props) => {
    return (
        <li>
            <input type='checkbox' id={props.id} onChange = {(e) => props.change(props.id, e)} checked={props.isChecked} />
            <label htmlFor = {props.id}>{ props.name }</label>
        </li>
    )
};


const ProductsFilter = (props) => {
    const productsToFilter = props.products.map(product =>
        <ProductItem
            name = { product.name }
            key = { product.id }
            id = { product.id }
            isChecked = { !props.hiddenProducts.includes(product.id) }
            change = { props.change } />);
    return (
        <>
            <h3>Je selectie</h3>
            <ul>
                { productsToFilter }
            </ul>
        </>
    )
};

export default ProductsFilter;