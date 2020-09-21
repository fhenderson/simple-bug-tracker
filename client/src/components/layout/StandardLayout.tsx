import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/styles'
import memoizeOne from 'memoize-one'

import Header from '../Header/Header'
import Loading from '../Loading'

const useStyles = () =>
  makeStyles({
    content: {
      flex: 1,
      overflowY: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    },
  })
const useStylesOnce = memoizeOne(useStyles)

/**
 * Common Layout with mobile menu / desktop top menu
 *
 * @param {*} { children } : Functional Component properties
 *
 * @category React Functional Components
 * @returns Standard layout
 */
const StandardLayout = ({ children }: any) => {
  const classes = useStylesOnce()
  return (
    classes && (
      <>
        <React.Suspense fallback={<Loading />}>
          <AppBar position="static">
            <Toolbar>
              <Header />
            </Toolbar>
          </AppBar>
        </React.Suspense>
        <Container className={classes().content} disableGutters={true} maxWidth={false}>
          {children}
        </Container>
      </>
    )
  )
}

StandardLayout.displayName = 'StandardLayout'
export default StandardLayout
