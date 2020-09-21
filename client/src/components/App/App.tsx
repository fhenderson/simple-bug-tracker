import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createMuiTheme, CssBaseline } from '@material-ui/core'

import Routes from '../../routing/Routes/Routes'
import ThemeProvider from '../../themes/CustomThemeProvider'

import './App.css'

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
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}

export default App
