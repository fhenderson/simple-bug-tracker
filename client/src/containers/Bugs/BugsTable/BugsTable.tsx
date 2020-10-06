import React from 'react'
import { Select, TableContainer, Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import FormControl from '@material-ui/core/FormControl'
import IconButton from '@material-ui/core/IconButton'
import InputLabel from '@material-ui/core/InputLabel'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import useTheme from '@material-ui/core/styles/useTheme'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import Tooltip from '@material-ui/core/Tooltip'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import FilterListIcon from '@material-ui/icons/FilterList'
import clsx from 'clsx'

import SeverityIcon from '../components/severity/SeverityIcon'
import { SEVERITY } from '../constants'
import { bugs, IBugs } from '../dummyData'

import { columns } from './columns'
import EnhancedTableHead, { Order } from './EnhancedTableHead'
import { getStatusStyle } from './getStatusStyle'

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (a: { [key in Key]: number | string | any }, b: { [key in Key]: number | string | any }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map(el => el[0])
}

const drawerWidth = 240
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  toolbar: {
    backgroundColor: theme.palette.background.default,
  },
  container: {
    maxHeight: 440,
  },
  date: {
    minWidth: '110px',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  filterIcon: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  filterTitle: {
    alignSelf: 'flex-end',
    margin: '0.5em',
  },
}))

export default function BugsTable() {
  const theme = useTheme()
  const classes = useStyles(theme)
  const [order, setOrder] = React.useState<Order>('asc')
  const [orderBy, setOrderBy] = React.useState<keyof IBugs>('status')
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [open, setOpen] = React.useState(false)
  const [state, setState] = React.useState<{ severity: string | number; name: string }>({
    severity: '',
    name: 'hai',
  })

  const [rows, setRows] = React.useState<IBugs[]>(bugs)

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof IBugs) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleChangePage = (event: any, newPage: React.SetStateAction<number>) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: { target: { value: React.ReactText } }) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const showFilters = (event: React.MouseEvent<unknown>) => {
    event.preventDefault()
    setOpen(true)
  }

  const hideFilters = () => {
    setOpen(false)
  }
  const clearFilters = () => {
    setState({
      severity: '',
      name: '',
    })
    setRows(bugs)
  }

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const name = event.target.name as keyof typeof state
    setState({
      ...state,
      [name]: event.target.value,
    })
  }
  React.useEffect(() => {
    if (state?.severity) {
      setRows(bugs.filter(r => r.severity === state.severity))
    }
  }, [state])

  return (
    <Paper className={classes.root}>
      <Box
        className={classes.toolbar}
        p={1}
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Typography variant={'h4'} align={'left'}>
          Bugs list
        </Typography>
        <Tooltip title="Filter list">
          <IconButton
            aria-label="filter list"
            color={'inherit'}
            edge="end"
            onClick={showFilters}
            className={clsx(open && classes.hide)}
          >
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Box
        className={classes.toolbar}
        p={1}
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'start'}
        alignItems={'center'}
      >
        <Typography variant={'h6'} align={'left'} className={classes.filterTitle}>
          Filters:
        </Typography>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="severity">Severity</InputLabel>
          <Select
            native
            value={state.severity}
            onChange={handleChange}
            inputProps={{
              name: 'severity',
              id: 'severity-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option value={SEVERITY.SHOW_STOPPER}>Show Stopper</option>
            <option value={SEVERITY.CRITICAL}>Critical</option>
            <option value={SEVERITY.MAJOR}>Major</option>
            <option value={SEVERITY.MINOR}>Minor</option>
          </Select>
        </FormControl>
        <Divider variant={'middle'} />
        <Button onClick={clearFilters} variant={'outlined'}>
          Clear
        </Button>
      </Box>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography variant={'h6'} align={'left'}>
            Table Filters
          </Typography>
          <IconButton onClick={hideFilters}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />. . .
      </Drawer>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <EnhancedTableHead classes={classes} order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                    <TableCell key={columns[0].id}>{row['description']}</TableCell>
                    <TableCell key={columns[1].id}>{row['reportedBy']}</TableCell>
                    <TableCell className={classes.date} key={columns[2].id}>
                      {row['created']}
                    </TableCell>
                    <TableCell key={columns[3].id} className={getStatusStyle(row['status'])}>
                      {row['status']}
                    </TableCell>
                    <TableCell className={classes.date} key={columns[4].id}>
                      {row['due']}
                    </TableCell>
                    <TableCell key={columns[5].id}>
                      <Box display={'flex'} alignItems={'center'}>
                        <SeverityIcon severityCode={row['severity']} />
                        <span>{row['severity']}</span>
                      </Box>
                    </TableCell>
                    <TableCell key={columns[6].id}>{row['assignTo']}</TableCell>
                  </TableRow>
                )
              })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  )
}
