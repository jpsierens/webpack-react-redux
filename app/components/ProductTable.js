import React from 'react';
import ProductRow from './ProductRow';

const products = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

const ProductTable = ({ filter }) => {
	let rows = [];
	console.log(filter.toLowerCase())

	products.forEach((p) => {
		let nameLC = p.name.toLowerCase();
		let filterLC = filter.toLowerCase();

		if (nameLC.indexOf(filterLC) !== -1) {
			rows.push(
				<ProductRow key={p.name} data={p} />
			);
		}
	});

	return <div> {rows} </div>;
};

export default ProductTable;