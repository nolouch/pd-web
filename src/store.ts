import { Middleware, applyMiddleware, compose, createStore } from 'redux'

import rootReducer from 'reducers'
import thunkMiddleware from 'redux-thunk'

const middlewares: Middleware[] = [thunkMiddleware]

interface ReduxExtensionAddedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
}

const composeEnhancers =
  ((window as unknown) as ReduxExtensionAddedWindow).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default (initialState = {}) => {
  if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger')

    middlewares.push(logger)
  }

  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)))

  return store
}
