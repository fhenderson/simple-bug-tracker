import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined'

import { getToken } from '../../lib/token'
import { PATH_CODES } from '../../routing'
import authenticationService from '../../service/authenticationService'
import ToggleTheme from '../ToggleTheme/ToggleTheme'

const Header = (): any => {
  const token = getToken()
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
      flexGrow="1"
    >
      <Box width={'100%'} textAlign={'left'}>
        <Typography variant="h6" color={'inherit'}>
          Simple Bug Tracker Application
        </Typography>
      </Box>
      <ToggleTheme />
      {token && (
        <Link onClick={() => authenticationService.logout()} to={PATH_CODES.LOGIN} color={'inherit'}>
          <ExitToAppOutlinedIcon />
        </Link>
      )}
    </Box>
  )
}

export default Header
