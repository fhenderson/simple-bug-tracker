import { makeStyles } from '@material-ui/core/styles'
import memoizeOne from 'memoize-one'

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'left',
  },
  topItems: {
    display: 'flex',
    flex: '1 1 auto',
    padding: '0 1em',
  },
  topTextItemWrapper: {
    minWidth: 'unset',
    padding: '0 1em',
  },
  topTextItem: {
    paddingLeft: '1em',
    paddingRight: '1em',
    paddingBottom: '0',
    whiteSpace: 'nowrap',
    display: 'inline-flex',
    '& a': {
      paddingBottom: '0.5em',
    },
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    focusVisible: true,
    border: '1px solid transparent',
    borderBottomWidth: '4px',
    '&:hover': {
      color: 'yellow',
    },
    '&.active': {
      borderBottomColor: 'navy',
    },
  },
  logoutButton: {
    paddingLeft: '2em',
    paddingRight: '2em',
  },
  noGutters: {
    padding: 0,
  },
  onlyOnDevice: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  onlyOnDesktop: {
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}))

export const useStylesOnce = memoizeOne(useStyles)
