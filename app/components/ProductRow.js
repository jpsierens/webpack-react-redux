import React, { PropTypes } from 'react';

const ProductRow = ({ data }) =>
    <div style={{padding: '5px 0'}}>
    	{data.name} = {data.price} <button>ADD</button>
    </div>;

ProductRow.PropTypes = {
    data: PropTypes.object
};

export default ProductRow;
