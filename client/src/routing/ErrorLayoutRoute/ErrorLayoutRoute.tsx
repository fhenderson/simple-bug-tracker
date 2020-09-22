import React from 'react'
import { Route } from 'react-router-dom'

import NotFoundView from '../../components/errors/NotFoundView/NotFoundView'

interface OwnProps {
  id: string
}

type Props = OwnProps

const ErrorLayoutRoute = (props: Props) => {
  return <Route id={props.id} render={() => <NotFoundView />} />
}

ErrorLayoutRoute.displayName = 'ErrorLayoutRoute'
export default ErrorLayoutRoute
