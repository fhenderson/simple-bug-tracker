import { ICols } from '../interfaces/ICols'

export const columns: ICols[] = [
  { id: 'description', label: 'Description', minWidth: 200, align: 'left' },
  { id: 'reportedBy', label: 'Reporter', align: 'left' },
  { id: 'created', label: 'Created', align: 'left' },
  {
    id: 'status',
    label: 'Status',
    minWidth: 90,
    align: 'left',
  },
  {
    id: 'due',
    label: 'Due',
    align: 'left',
  },
  {
    id: 'severity',
    label: 'Severity',
    align: 'left',
  },
  { id: 'assignTo', label: 'Assign to', minWidth: 130, align: 'left' },
]
