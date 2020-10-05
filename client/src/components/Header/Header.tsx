import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import makeStyles from '@material-ui/core/styles/makeStyles'
import useTheme from '@material-ui/core/styles/useTheme'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined'

import { getToken } from '../../lib/token'
import { PATH_CODES } from '../../routing'
import authenticationService from '../../services/authenticationService'
import MenuItems from '../menu/MenuItems/MenuItems'
import ToggleTheme from '../ToggleTheme/ToggleTheme'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'white',
  },
  title: {
    margin: 'auto 1em',
  },
}))

const Header = (): any => {
  const classes = useStyles(useTheme())
  const token = getToken()
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
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
            <Box width={'100%'} textAlign={'left'} display={'flex'} flexDirection={'row'}>
              <Typography className={classes.title} variant="h6" color={'inherit'}>
                Simple Bug Tracker Application
              </Typography>
              {token && <MenuItems />}
            </Box>
            <ToggleTheme />
            {token && (
              <Link
                className={classes.menuButton}
                onClick={() => authenticationService.logout()}
                to={PATH_CODES.LOGIN}
                color={'inherit'}
              >
                <ExitToAppOutlinedIcon />
              </Link>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
