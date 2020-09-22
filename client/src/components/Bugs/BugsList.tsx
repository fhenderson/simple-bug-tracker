import React, { PureComponent } from 'react'
import { Typography } from '@material-ui/core'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface OwnProps {
  // nothing yet
}

type Props = OwnProps

class BugsList extends PureComponent<Props> {
  render() {
    return (
      <>
        <Typography variant={'h1'} color={'primary'}>
          Bugs list
        </Typography>
      </>
    )
  }
}

export default BugsList
