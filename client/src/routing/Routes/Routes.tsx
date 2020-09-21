import React from 'react'
import { Route, Router, Switch, withRouter } from 'react-router-dom'

import LoginComponent from '../../components/LoginComponent/LoginComponent'
import PATH_CODES from '../pathnames'
import PrivateRoute from '../PrivateRoute'

type Props = {
  history: any
  location: any
}

const Routes = (props: Props) => {
  return (
    <Router history={props.history}>
      <Switch>
        <Route path={PATH_CODES.ROOT} exact component={LoginComponent} />
        <Route
          key={'loginPage'}
          id={'loginPage'}
          path={PATH_CODES.LOGIN}
          component={LoginComponent}
          privateRedirectPath={PATH_CODES.HOME}
        />
        <PrivateRoute component={() => <h1>Home</h1>} path={PATH_CODES.HOME} {...props} />
      </Switch>
    </Router>
  )
}

export default withRouter(Routes)
