import { createStore, compose, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import type {
  Store,
  State,
} from '../types'

import rootReducer from '../reducers'
import allEnhancers from './enhancers'
import getMiddlewares from './middlewares'


function getStore(preLoadedState: State | void) {
  const middlewares = getMiddlewares()
  const middlewareEnhancers = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancers, ...allEnhancers]
  const composedEnhancers = composeWithDevTools(...enhancers)
  //const composedEnhancers = compose(...enhancers)


  const store: Store = createStore(rootReducer, preLoadedState, composedEnhancers)

  return store
}


export default getStore