import React from 'react'
import { withRouter } from 'react-router-dom'
import { Box } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { authenticationService } from '../../service/authenticationService'
import tokenService from '../../service/tokenService'
import Header from '../Header/Header'

type Props = {
  history: any
}

const LoginComponent = (props: Props): JSX.Element => {
  const { history } = props
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [message, setMessage] = React.useState()
  const [username, setUsername] = React.useState('john')
  const [password, setPassword] = React.useState('changeme')

  React.useEffect(() => {
    localStorage.clear()
  })

  function onChange(e: { preventDefault: () => void; target: { name: any; value: any } }) {
    e.preventDefault()
    switch (e.target.name) {
      case 'username':
        setUsername(e.target.value)
        break

      case 'password':
        setPassword(e.target.value)
        break
      default:
        break
    }
  }

  function login(e: { preventDefault: () => void }) {
    e.preventDefault()
    const credentials = { username, password }
    authenticationService.login(credentials).then(res => {
      console.log({ res })
      if (res.status === 201) {
        if (res?.data?.access_token) {
          tokenService.updateCurrentTokenValue(res.data.access_token)
        }
        history.push('/home')
      } else {
        setMessage(res.data.message)
      }
    })
  }

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Header />
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Box m={1} pt={2}>
          <Typography variant="h4" style={styles.center}>
            Login
          </Typography>
          <form>
            <Typography variant="h4" style={styles.notification}>
              {message}
            </Typography>
            <TextField
              type="text"
              label="USERNAME"
              fullWidth
              margin="normal"
              name="username"
              value={username}
              onChange={onChange}
            />

            <TextField
              type="password"
              label="PASSWORD"
              fullWidth
              margin="normal"
              name="password"
              value={password}
              onChange={onChange}
            />

            <Button variant="contained" color="secondary" onClick={login}>
              Login
            </Button>
          </form>
        </Box>
      </Container>
    </React.Fragment>
  )
}

const styles = {
  center: {
    display: 'flex',
    justifyContent: 'center',
  },
  notification: {
    display: 'flex',
    justifyContent: 'center',
    color: '#dc3545',
  },
}

export default withRouter(LoginComponent)
