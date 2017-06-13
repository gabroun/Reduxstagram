// let's go!

import React from 'react';

import { render } from 'react-dom';

//import react router debs
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
//the reason history we used the curly bracket for history because it is a named export and store without them because it is a default
import store, { history } from './store';

//import css
import css from './styles/style.styl';

//import component
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

const router = (
    //provider is going to expose our store to the actual application
    <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={PhotoGrid}/>
            <Route path="/view/:postId" component={Single}/>
        </Route>
    </Router>
    </Provider>
);
render(
    router,
    document.getElementById('root')
);