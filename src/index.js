import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import createHistory from 'history/createBrowserHistory';
import { Route, Router } from 'react-router-dom';
import { routerMiddleware } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';

import reducers from 'reducers';
import Layout from 'containers/layout';
import Phone from 'containers/phone';

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, middleware)));

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                {/*Содержит sidebar и место для контента*/}
                <Route exact path='/' component={Layout}/>
                <Route path="/phones/:id" component={Phone}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();