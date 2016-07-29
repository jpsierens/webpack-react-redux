import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const filter = (state = '', action) => {
    switch (action.type) {
        case types.FILTER:
            return action.filter;
        default:
            return state;
    }
};

const defaultProducts = [
	{ id: 1, price: '$49.99', name: 'Football' },
	{ id: 2, price: '$9.99', name: 'Baseball' },
	{ id: 3, price: '$29.99', name: 'Basketball' },
	{ id: 4, price: '$99.99', name: 'iPod Touch' },
	{ id: 5, price: '$399.99', name: 'iPhone 5' },
	{ id: 6, price: '$199.99', name: 'Nexus 7' }
];

const products = (state = defaultProducts, action) => {
	switch (action.type) {
		default:
			return state;
	}
};


const rootReducer = combineReducers({
    filter,
    products,
    routing
});

export default rootReducer;
