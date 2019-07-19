import { createStore, compose, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from '../reducers'
import allEnhancers from './enhancers'
import getMiddlewares from './middlewares'


function getStore(preLoadedState) {
  const middlewares = getMiddlewares()
  const middlewareEnhancers = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancers, ...allEnhancers]
  const composedEnhancers = composeWithDevTools(...enhancers)
  //const composedEnhancers = compose(...enhancers)


  const store = createStore(rootReducer, preLoadedState, composedEnhancers)

  return store
}


export default getStore