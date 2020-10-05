import React, { PureComponent } from 'react'
import { Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'

import BugsTable from './BugsTable/BugsTable'

class BugsList extends PureComponent {
  render() {
    return (
      <Box m={1}>
        <Typography variant={'subtitle1'} align={'left'}>
          Bugs list
        </Typography>
        <BugsTable />
      </Box>
    )
  }
}

export default BugsList
