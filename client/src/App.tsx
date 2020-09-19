import React from 'react'
import { createMuiTheme, CssBaseline, Typography, useTheme } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness7Icon from '@material-ui/icons/Brightness7'

import ThemeProvider, { useChangeTheme } from './themes/CustomThemeProvider'
import logo from './logo.svg'

import './App.css'

const ToggleTheme: React.FC = () => {
  const theme = useTheme()
  const changeTheme = useChangeTheme()
  return (
    <div>
      <IconButton title="Toggle light/dark mode" onClick={() => changeTheme()}>
        {theme.palette.type === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
      <Typography>Clicking on the Toggle Icon above will change my color</Typography>
    </div>
  )
}

function App(): any {
  const theme = createMuiTheme({
    palette: {
      type: 'light',
    },
  })

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <div className="App">
        <ToggleTheme />
        <hr />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </ThemeProvider>
  )
}

export default App
