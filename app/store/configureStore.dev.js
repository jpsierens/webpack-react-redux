import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
        	applyMiddleware(thunk),
        	DevTools.instrument()
        )
    );

    return store;
}
