import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import getStore from './store'
import MainContainer from './containers/MainContainer'
import DashboardContainer from './containers/DashboardContainer'
import SensorDataContainer from './containers/SensorDataContainer'
import ActuatorActivitiesContainer from './containers/ActuatorActivities'


const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout {...props}>
      <Component {...props} />
    </Layout>
  )} />

)

const store = getStore()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <AppRoute exact path='/dashboard' layout={MainContainer} component={DashboardContainer} />
        <AppRoute exact path= '/sensorData' layout={MainContainer} component={SensorDataContainer} />
        <AppRoute exact path= '/actuatorActivities' layout={MainContainer} component={ActuatorActivitiesContainer} />
        <Redirect from='/' to='dashboard' />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('main')
)