import React from 'react'
import { Route } from 'react-router-dom'
import { createMuiTheme, CssBaseline } from '@material-ui/core'
import { Router } from '@material-ui/icons'

// import { AuthContext } from '../../context/auth'
// import PrivateRoute from '../../routing/PrivateRoute'
// import Routes from '../../routing/Routes/Routes'
import ThemeProvider from '../../themes/CustomThemeProvider'
import LoginComponent from '../LoginComponent/LoginComponent'

import './App.css'

function App(): any {
  const theme = createMuiTheme({
    palette: {
      type: 'light',
    },
  })

  // const [authTokens, setAuthTokens] = useState()
  //
  // const setTokens = (data: any) => {
  //   localStorage.setItem('tokens', JSON.stringify(data))
  //   setAuthTokens(data)
  // }

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <div className="App">
        <LoginComponent />
        {/*<AuthContext.Provider value={{ authTokens, setTokens }}>*/}
        <Router>
          <div>
            {/*<Route exact path="/" component={Home} />*/}
            <Route path="/" render={() => <LoginComponent />} />
            {/*<Route path="/signup" component={Signup} />*/}
            {/*<PrivateRoute path="/admin" component={Admin} />*/}
          </div>
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
