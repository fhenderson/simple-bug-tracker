import React from 'react'
import { useHistory, withRouter } from 'react-router-dom'
import { Box } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import PATH_CODES from '../../routing/pathnames'
import { authenticationService } from '../../service/authenticationService'
import Header from '../Header/Header'

// type Props = {
//   history: any
// }

const LoginComponent = (): JSX.Element => {
  const history = useHistory()
  const [message, setMessage] = React.useState('')
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

  async function login(e: { preventDefault: () => void }) {
    e.preventDefault()
    await authenticationService.login({ username, password }).then(res => {
      console.log({ res })
      if (res.status === 200) {
        history?.push(PATH_CODES.BUGS)
      } else {
        setMessage('ERROR')
      }
    })
  }

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar variant={'dense'}>
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
