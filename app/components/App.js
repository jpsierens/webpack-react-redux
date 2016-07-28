import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const App = ({ children }) =>
    <div>
        <h1>Product table</h1>
        { children }
        <footer>
            <Link to="/">Products</Link>
            <Link to="/about">About</Link>
        </footer>
    </div>;

App.PropTypes = {
    children: PropTypes.object
}

export default App;
