import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


//import the created reducers
import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({
    posts,
    comments,
    //router is essentially the changes in the url when the user change between pages
    routing: routerReducer
});

export default rootReducer;


