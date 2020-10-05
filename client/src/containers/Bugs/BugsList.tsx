import React, { PureComponent } from 'react'
import Box from '@material-ui/core/Box'

import BugsTable from './BugsTable/BugsTable'

class BugsList extends PureComponent {
  render() {
    return (
      <Box m={1}>
        <BugsTable />
      </Box>
    )
  }
}

export default BugsList
