import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createMuiTheme, CssBaseline } from '@material-ui/core'

// import PrivateRoute from '../../routing/PrivateRoute'
import Routes from '../../routing/Routes/Routes'
import ThemeProvider from '../../themes/CustomThemeProvider'

// import LoginComponent from '../LoginComponent/LoginComponent'
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
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <BrowserRouter>
          <Routes />
          {/*<LoginComponent />*/}
        </BrowserRouter>
        {/*<Router>*/}
        {/*  <div>*/}
        {/*    /!*<Route exact path="/" component={Home} />*!/*/}
        {/*    <Route path="/" render={() => <LoginComponent />} />*/}
        {/*    /!*<Route path="/signup" component={Signup} />*!/*/}
        {/*    /!*<PrivateRoute path="/admin" component={Admin} />*!/*/}
        {/*  </div>*/}
        {/*</Router>*/}
      </div>
    </ThemeProvider>
  )
}

export default App
