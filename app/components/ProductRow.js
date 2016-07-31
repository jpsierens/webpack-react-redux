import React, { PropTypes } from 'react';

const ProductRow = ({ data }) =>
    <div>
        <p>{data.name} = {data.price} </p>
    </div>;

ProductRow.propTypes = {
    data: PropTypes.object
};

export default ProductRow;
