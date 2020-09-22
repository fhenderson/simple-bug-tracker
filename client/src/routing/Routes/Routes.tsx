import React from 'react'
import { Route, Router, Switch, withRouter } from 'react-router-dom'

import BugsList from '../../components/Bugs/BugsList'
import LoginComponent from '../../components/LoginComponent/LoginComponent'
import { ErrorLayoutRoute } from '../index'
import PATH_CODES from '../pathnames'
import PrivateRoute from '../PrivateRoute/PrivateRoute'

type Props = {
  history: any
  location: any
}

const Routes = (props: Props) => {
  return (
    <Router history={props.history}>
      <Switch>
        <Route path={PATH_CODES.ROOT} exact component={() => <h2>Home</h2>} />
        <PrivateRoute id={'BugsList'} path={PATH_CODES.BUGS} component={BugsList} {...props} />
        <Route key={'loginPage'} id={'loginPage'} path={PATH_CODES.LOGIN} component={LoginComponent} />
        <ErrorLayoutRoute id={'pageNotFound_CatchAll'} />
      </Switch>
    </Router>
  )
}

export default withRouter(Routes)
