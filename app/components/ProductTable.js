import React, { PropTypes } from 'react';
import ProductRow from './ProductRow';

const ProductTable = ({ filter, products }) => {
    let rows = [];

    products.forEach((p) => {
        const nameLC = p.name.toLowerCase();
        const filterLC = filter.toLowerCase();

        if (nameLC.indexOf(filterLC) !== -1) {
            rows.push(
                <ProductRow key={p.name} data={p} />
            );
        }
    });

    return <div> {rows} </div>;
};

ProductTable.PropTypes = {
    filter: PropTypes.string
};

export default ProductTable;
