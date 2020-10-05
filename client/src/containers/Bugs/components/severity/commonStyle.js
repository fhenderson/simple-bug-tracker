import { makeStyles } from '@material-ui/styles'
import memoizeOne from 'memoize-one'

const common = () =>
  makeStyles(() => ({
    container: {
      display: 'inline-block',
      position: 'relative',
      verticalAlign: 'middle',
      overflow: 'hidden',
      height: '.8em',
      minWidth: '1em',
    },
  }))
const commonStyles = memoizeOne(common)

export default commonStyles
export { commonStyles }
