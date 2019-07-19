import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import getStore from './store'
import MainContainer from './containers/MainContainer'


const store = getStore()

ReactDOM.render(
  <Provider store={store}>
    <MainContainer />
  </Provider>,
  document.getElementById('main')
)