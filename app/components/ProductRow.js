import React, { PropTypes } from 'react';

const ProductRow = ({ data }) =>
    <div style={{padding: '5px 0'}}>
    	<button>ADD</button> {data.name}(x{data.stock}) - {data.price}
    </div>;

ProductRow.PropTypes = {
    data: PropTypes.object
};

export default ProductRow;
