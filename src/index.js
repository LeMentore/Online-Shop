import './index.css'

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router-dom';
import { ConnectedRouter,  routerMiddleware } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';

import reducers from 'reducers';
import Layout from 'containers/layout';
import Phones from 'containers/phones';

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, middleware)));

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {/*Содержит sidebar и место для контента*/}
            <Layout component={Layout}>
                <Route path='/' component={Phones} />
            </Layout>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();