import React from 'react';
import { connect } from 'react-redux';

import Table from '../../components/customTable/table/Table';
import ProductsFilter from '../../components/productsFilter/ProductsFilter';
import Badges from '../../components/badges/Badges';
import { fetchProducts, toggleFilter, clearFilter } from '../../actions';
import { calculateSortedFields } from '../../helpers/helper';
import { API_URL } from '../../constants';

import './ProductsComparison.scss';

class ProductsComparison extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.clearFilter = this.clearFilter.bind(this);
    }
    componentDidMount() {
        this.props.dispatch(fetchProducts(API_URL));
    }

    handleChange(id) {
        this.props.dispatch(toggleFilter(id));
    }

    clearFilter() {
        this.props.dispatch(clearFilter());
    }

    render() {
        if (!this.props.products.length) {
            // this could be some notification message if data not available, or loading bar
            return null;
        }
        const products = this.props.products;

        // here I suppose that all products in list have the same set of fields
        // and there is no need to go through all products to add missed field
        // in prod version it would be better to have some config, which will define which fields we should display
        // because of this I have created separate array with displayable fields -> I would separate it from products data
        const requiredFields = calculateSortedFields(Object.keys(products[0]));
        const filteredProducts = products.filter(product => !this.props.hiddenProducts.includes(product.id));
        const itemComponents = {
            badges: (content) => <Badges content = {content} />,
        };
        return (
            <section>
                {
                    filteredProducts.length < 2  ?
                        <div className = 'message'>Please, choose at least 2 products to compare
                            <span onClick = {this.clearFilter}>Show all product</span>
                        </div> :
                        <Table
                            filters = { <ProductsFilter
                                products = { products }
                                hiddenProducts = { this.props.hiddenProducts }
                                change = { this.handleChange }  /> }
                            tableConfig = {{ products: filteredProducts, requiredFields, itemComponents }}
                            click = { this.handleChange }>
                        </Table>
                }
            </section>
        );
    }
}

function mapStateToProps (state) {
    return {
        products: state.products.products,
        hiddenProducts: state.filter,
    }
}

export default connect(mapStateToProps)(ProductsComparison);
