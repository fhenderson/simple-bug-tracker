import React from 'react'
// import { useHistory } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Header from '../Header/Header'

// import AuthService from '../../service/AuthService'

// type Props = {}

const LoginComponent = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const history = useHistory()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [message /*, setMessage */] = React.useState()
  const [username, setUsername] = React.useState()
  const [password, setPassword] = React.useState()

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
    // const credentials = { username, password }
    // AuthService.login(credentials).then(res => {
    //   if (res.data.status === 200) {
    //     localStorage.setItem('userInfo', JSON.stringify(res.data.result))
    //     history.push('/list-user')
    //   } else {
    //     setMessage(res.data.message)
    //   }
    // })
  }

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Header />
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
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

export default LoginComponent
