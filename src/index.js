import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware, ConnectedRouter } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'

import createRootReducer from 'reducers'
import routes from 'routes'

import './index.css'

const history = createBrowserHistory()
const middlewares = [
  thunk,
  routerMiddleware(history)
]
const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
