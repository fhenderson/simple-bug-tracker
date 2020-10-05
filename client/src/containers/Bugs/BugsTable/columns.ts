import { ICols } from '../interfaces/ICols'

export const columns: ICols[] = [
  { id: 'description', label: 'Description', minWidth: 200, align: 'left', numeric: false },
  { id: 'reportedBy', label: 'Reporter', align: 'left', numeric: false },
  { id: 'created', label: 'Created', align: 'left', numeric: false },
  {
    id: 'status',
    label: 'Status',
    minWidth: 90,
    align: 'left', numeric: false,
  },
  {
    id: 'due',
    label: 'Due',
    align: 'left', numeric: false,
  },
  {
    id: 'severity',
    label: 'Severity',
    align: 'left', numeric: false,
  },
  { id: 'assignTo', label: 'Assign to', minWidth: 130, align: 'left', numeric: false },
]
