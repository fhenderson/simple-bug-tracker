import React from 'react'
import { Route } from 'react-router-dom'

import StandardLayout from '../../containers/layouts/StandardLayout/StandardLayout'

type Props = {
  path: any
  component: any
}

const StandardLayoutRoute = ({ path, component: Component, ...rest }: Props) => (
  <Route
    path={path}
    render={matchProps =>
      path &&
      matchProps && (
        <StandardLayout>
          <Component {...matchProps} {...rest} />
        </StandardLayout>
      )
    }
  />
)

StandardLayoutRoute.displayName = 'StandardLayoutRoute'
export default StandardLayoutRoute
