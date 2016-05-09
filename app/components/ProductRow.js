import React from 'react';

const ProductRow = ({ data }) => 
    <div>
        <p>{data.name} = {data.price} </p>
    </div>;


export default ProductRow;
