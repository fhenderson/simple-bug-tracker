import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import { useAuth } from '../context/auth'

import PATH_CODES from './pathnames'

type Props = {
  history: any | undefined
  location: any | undefined
  component: any
}

function PrivateRoute(props: Props) {
  const { component: Component, ...rest } = props
  const { authTokens } = useAuth()

  return (
    <Route
      {...rest}
      render={props =>
        authTokens ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: PATH_CODES.LOGIN, state: { referer: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute
