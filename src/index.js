import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import getStore from './store'
import MainContainer from './containers/MainContainer'
import { routes } from './constants/settings'


const store = getStore()
const DashboardContainer = React.lazy(() => import('./containers/DashboardContainer'))
const ActivitiesViewContainer = React.lazy(() => import('./containers/ActivitiesViewContainer'))

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <React.Suspense fallback={<div>Loading...</div>}>
  <Route {...rest} render={props => (
    <Layout {...props}>
      <Component {...props} />
    </Layout>
  )} />
  </React.Suspense>
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <AppRoute exact path={`/${routes.dashboard}`} layout={MainContainer} component={DashboardContainer} />
        <AppRoute exact path= {`/${routes.activities}`} layout={MainContainer} component={ActivitiesViewContainer} />
        <Redirect from='/' to={`/${routes.dashboard}`} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('main')
)