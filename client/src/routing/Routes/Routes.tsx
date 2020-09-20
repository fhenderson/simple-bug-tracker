import React from 'react'
import { Route, Router, Switch, useHistory } from 'react-router-dom'

import LoginComponent from '../../components/LoginComponent/LoginComponent'
import PATH_CODES from '../pathnames'

// type Props = {
//   history: any
// }

const Routes = () => {
  const history = useHistory()
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={LoginComponent} />
        <Route
          key={'loginPage'}
          id={'loginPage'}
          path={PATH_CODES.LOGIN}
          component={LoginComponent}
          privateRedirectPath={PATH_CODES.HOME}
        />
        {/*<Route path="/list-user" component={ListUserComponent} />*/}
        {/*<Route path="/add-user" component={AddUserComponent} />*/}
        {/*<Route path="/edit-user" component={EditUserComponent} />*/}
      </Switch>
    </Router>
  )
}

export default Routes
