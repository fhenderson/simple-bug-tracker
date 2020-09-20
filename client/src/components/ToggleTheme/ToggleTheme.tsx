import React from 'react'
import { useTheme } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import Zoom from '@material-ui/core/Zoom'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness7Icon from '@material-ui/icons/Brightness7'

import { useChangeTheme } from '../../themes/CustomThemeProvider'

const ToggleTheme: React.FC = () => {
  const theme = useTheme()
  const changeTheme = useChangeTheme()
  return (
    <Tooltip TransitionComponent={Zoom} title="Clicking on the Toggle Icon above will change my color">
      <IconButton title="Toggle light/dark mode" onClick={() => changeTheme()}>
        {theme.palette.type === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </Tooltip>
  )
}

export default ToggleTheme
