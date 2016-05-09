import React, { PropTypes } from 'react';

const ProductRow = ({ data }) =>
    <div>
        <p>{data.name} = {data.price} </p>
    </div>;

ProductRow.PropTypes = {
    data: PropTypes.object
};

export default ProductRow;
