import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import tokenService from '../service/tokenService'

import PATH_CODES from './pathnames'
import StandardLayoutRoute from './StandardLayoutRoute'

type Props = {
  history: any | undefined
  location: any | undefined
  component: any
  path: string | undefined
}

function PrivateRoute(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { component: Component, ...rest } = props
  const token = tokenService.currentTokenValue

  return (
    <Route
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
