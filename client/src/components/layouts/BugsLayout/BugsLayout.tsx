import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/styles'
import memoizeOne from 'memoize-one'

import Header from '../../Header/Header'
import Loading from '../../Loading'

interface OwnProps {
  children: any
}

type IProps = OwnProps

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

const BugsLayout = (props: IProps) => {
  const { children } = props
  const classes = useStylesOnce()
  return (
    classes && (
      <>
        <React.Suspense fallback={<Loading />}>
          <Header />
        </React.Suspense>
        <Container className={classes().content} disableGutters={true} maxWidth={false}>
          {children}
        </Container>
      </>
    )
  )
}

export default BugsLayout
