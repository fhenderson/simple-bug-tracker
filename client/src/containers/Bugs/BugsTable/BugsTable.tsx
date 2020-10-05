import React from 'react'
import { TableContainer } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'

import SeverityIcon from '../components/severity/SeverityIcon'
import { bugs } from '../dummyData'

import { columns } from './columns'
import { getStatusStyle } from './getStatusStyle'

const rows = bugs

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  date: {
    minWidth: '110px',
  },
}))

export default function BugsTable() {
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const handleChangePage = (event: any, newPage: React.SetStateAction<number>) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: { target: { value: React.ReactText } }) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.id} style={{ minWidth: column?.minWidth || 'inherit' }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
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
