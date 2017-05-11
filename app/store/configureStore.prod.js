import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

const history = createHistory();
const middleware = routerMiddleware(history);

export default {
    history,
    configureStore: function configureStore() {
        return createStore(
            combineReducers({
                rootReducer,
                routerReducer
            }),
            applyMiddleware(middleware),
        );
    }
};
