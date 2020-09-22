import React, { PureComponent } from 'react'
import { Typography } from '@material-ui/core'

class BugsList extends PureComponent {
  render() {
    return (
      <>
        <Typography variant={'h3'} color={'primary'}>
          Bugs list
        </Typography>
      </>
    )
  }
}

export default BugsList
