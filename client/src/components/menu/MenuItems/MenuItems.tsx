import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { MenuItem, MenuList } from '@material-ui/core'
import useTheme from '@material-ui/core/styles/useTheme'

import { PATH_CODES } from '../../../routing'

import { useStylesOnce } from './menuItems.theme'

/**
 * Top menu item links
 *
 * @returns
 * @category React Functional Components
 * @category Components
 */
const MenuItems = () => {
  const theme = useTheme()
  const classes = useStylesOnce(theme)

  return (
    <MenuList className={classes.root} id={'topMenu'} dense={true}>
      <MenuItem id={'menu-home-item'} className={classes.topTextItem}>
        <NavLink className={classes.link} exact activeClassName="active" to={PATH_CODES.ROOT}>
          Home
        </NavLink>
      </MenuItem>
      <MenuItem id={'menu-billing-item'} className={classes.topTextItem}>
        <NavLink className={classes.link} activeClassName="active" to={PATH_CODES.BUGS}>
          Bug List
        </NavLink>
      </MenuItem>
    </MenuList>
  )
}

MenuItems.displayName = 'MenuItems'

export default withRouter(MenuItems)
