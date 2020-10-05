import { STATUS } from '../constants'

export function getStatusStyle(st: string) {
  let cl = ''
  switch (st) {
    case STATUS.OPEN:
      cl = 'statusOpen'
      break
    case STATUS.IN_PROGRESS:
      cl = 'statusInProgress'
      break
    case STATUS.REOPEN:
      cl = 'statusReOpen'
      break
    case STATUS.TO_BE_TESTED:
      cl = 'statusToBeTested'
      break
    case STATUS.CLOSED:
      cl = 'statusClose'
      break
  }
  return cl
}
