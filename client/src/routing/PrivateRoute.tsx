import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import tokenService from '../service/tokenService'

import PATH_CODES from './pathnames'

type Props = {
  history: any | undefined
  location: any | undefined
  component: any
  path: string | undefined
}

function PrivateRoute(props: Props) {
  const { component: Component, ...rest } = props
  const token = tokenService.currentTokenValue

  return (
    <Route
      {...rest}
      render={props =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: PATH_CODES.LOGIN, state: { referer: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute
