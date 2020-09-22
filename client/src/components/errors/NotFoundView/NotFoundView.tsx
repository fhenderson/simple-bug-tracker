import React from 'react'
import { useHistory, withRouter } from 'react-router-dom'
import { Box, Container, makeStyles, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'

import PATH_CODES from '../../../routing/pathnames'
import Page from '../../Page/Page'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  image: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    width: 560,
  },
}))

const NotFoundView = () => {
  const classes = useStyles()
  const history = useHistory()
  const goHome = () => {
    history.push(PATH_CODES.ROOT)
  }
  return (
    <Page className={classes.root} title="404">
      <Box display="flex" flexDirection="column" height="100%" justifyContent="center" alignItems="center">
        <Container maxWidth="md">
          <Typography align="center" color="textPrimary" variant="h3">
            Page not found!
          </Typography>
          <br />
          <Typography align="center" color="textPrimary" variant="body1">
            Use the home button to return to the root of the application.
          </Typography>
          <br />
          <Button variant={'outlined'} onClick={goHome}>
            Home
          </Button>
        </Container>
      </Box>
    </Page>
  )
}

export default withRouter(NotFoundView)
