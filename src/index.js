import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import getStore from './store'
import DashboardContainer from './containers/DashboardContainer'


const store = getStore()

ReactDOM.render(
  <Provider store={store}>
    <DashboardContainer />
  </Provider>,
  document.getElementById('main')
)