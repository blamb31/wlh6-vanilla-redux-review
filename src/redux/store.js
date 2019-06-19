// import createStore from redux
import { createStore } from 'redux';
// import our reducer
import todosReducer from './todoReducer';

// create store
export default createStore(
    todosReducer,
    // enhance our browser to use development tools to keep track of our redux state
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);