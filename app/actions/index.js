import 'whatwg-fetch';
import * as types from './types';

export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}

// UI click on add btn
function addProductToCart(product) {
	return {
		types: types.ADD_PRODUCT_TO_CART
	}
}

// network request to get product stock
function requestProductStock(product) {
	return {
		types: types.REQUEST_PRODUCT_STOCK,
		product
	}
}

// network response of product stock
function receiveProductStock(product, stock) {
	return {
		types: types.RECEIVE_PRODUCT_STOCK,
		product,
		stock
	}
}

// thunk it
export function fetchProductStock(product) {
	return function (dispatch) {
		requestProductStock(Product);

		return fetch(`/getStock/${product.id}`)
			.then(res => res.json())
			.then(json => dispatch(receiveProductStock(product, stock)));
	}
}
