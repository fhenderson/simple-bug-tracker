import React from 'react'
import { Route, Router, Switch, withRouter } from 'react-router-dom'

import LoginComponent from '../../components/LoginComponent/LoginComponent'
import PATH_CODES from '../pathnames'
// import PrivateRoute from '../PrivateRoute'

type Props = {
  history: any
  location: any
}

const Routes = (props: Props) => {
  const { history } = props
  return (
    <Router history={history}>
      <Switch>
        <Route path={PATH_CODES.ROOT} exact component={LoginComponent} />
        <Route
          key={'loginPage'}
          id={'loginPage'}
          path={PATH_CODES.LOGIN}
          component={LoginComponent}
          privateRedirectPath={PATH_CODES.HOME}
        />
        <Route path="/home" component={() => <h1>Home</h1>} />
        {/*<Route path="/add-user" component={AddUserComponent} />*/}
        {/*<Route path="/edit-user" component={EditUserComponent} />*/}
      </Switch>
    </Router>
  )
}

export default withRouter(Routes)
