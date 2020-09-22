import React from 'react'
import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

import ToggleTheme from '../ToggleTheme/ToggleTheme'

const Header = (): any => {
  return (
    <Box
      className={'header'}
      pt={2}
      pb={2}
      px={0}
      display="flex"
      alignItems="center"
      flexDirection="row"
      flexWrap="nowrap"
      justifyContent={'space-between'}
      flexGrow={1}
    >
      <Typography variant="h6" color={'inherit'}>
        Simple Bug Tracker Application
      </Typography>
      <ToggleTheme />
    </Box>
  )
}

export default Header
