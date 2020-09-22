import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { AppBar, Badge, Box, Hidden, IconButton, makeStyles, Toolbar } from '@material-ui/core'
import InputIcon from '@material-ui/icons/Input'
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined'
import clsx from 'clsx'

interface IOwnProps {
  className: string
}

type IProps = IOwnProps

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    width: 60,
    height: 60,
  },
}))

const TopBar = (props: IProps) => {
  const { className, ...rest } = props
  const classes = useStyles()
  const [notifications] = useState([])

  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
      <Toolbar>
        <RouterLink to="/bugs">Bugs List</RouterLink>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge badgeContent={notifications.length} color="primary" variant="dot">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <InputIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
