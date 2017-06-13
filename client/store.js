import { createStore, compose } from 'redux';
//it allow us to hoop up react router history with redux
import { syncHistoryWithStore } from 'react-router-redux';

import { browserHistory } from 'react-router';

//import root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

//create an object for the default data
//in ES6 if your key and the value that you are sitting to it is the same, then you dont need to have key:value pair,
//you just call the variable that holds the value
const defaultState = {
    posts,
    comments
};

//store enhancer
const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : f => f
);

//the root reducer is how we are going to interface with
const store = createStore(rootReducer, defaultState, enhancers);

//the browserHistory essentially keeps track of all the pages that i have gone to with react-router
export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
    module.hot.accept('./reducers/',() =>{
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;