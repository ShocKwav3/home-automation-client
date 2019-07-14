import thunk from 'redux-thunk'


const getDebugMiddlewares = () => {
  const debugMiddlewares = []

  if(process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger')
    debugMiddlewares.push(logger)
  }

  return debugMiddlewares
}

const getMiddlewares = () => {
  const middlewares = [
    thunk,
    ...getDebugMiddlewares(),
  ]

  return middlewares
}


export default getMiddlewares