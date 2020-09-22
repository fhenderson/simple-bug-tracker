import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import { getToken } from '../../lib/token'
import PATH_CODES from '../pathnames'
import StandardLayoutRoute from '../StandardLayoutRoute/StandardLayoutRoute'

type Props = {
  id: string | undefined
  history: any | undefined
  location: any | undefined
  component: any
  path: string | undefined
}

function PrivateRoute(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { component: Component, id, ...rest } = props
  // Todo: Add real token validation
  const token = getToken()
  return (
    <Route
      id={id}
      {...rest}
      render={() =>
        token ? (
          <StandardLayoutRoute {...props} />
        ) : (
          <Redirect to={{ pathname: PATH_CODES.LOGIN, state: { referer: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute
