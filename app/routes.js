import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import FilterableTable from './containers/FilterableTable';
import Cart from './components/Cart';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={FilterableTable} />
		<Route path="/cart" component={Cart} />
	</Route>
);
