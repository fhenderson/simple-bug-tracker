import React, { FunctionComponent } from 'react'
import { Box } from '@material-ui/core'

import { SEVERITY } from '../../constants'

import IconShowHigh from './IconShowHigh'
import IconShowHighest from './IconShowHighest'
import IconShowLow from './IconShowLow'
import IconShowMedium from './IconShowMedium'

const getIconForSeverity = (severity: string) => {
  let Icon = null
  switch (severity) {
    case SEVERITY.SHOW_STOPPER:
      Icon = IconShowHighest
      break
    case SEVERITY.CRITICAL:
      Icon = IconShowHigh
      break
    case SEVERITY.MAJOR:
      Icon = IconShowMedium
      break
    case SEVERITY.MINOR:
      Icon = IconShowLow
      break
  }
  return Icon
}

interface OwnProps {
  severityCode: string
}

type Props = OwnProps

const SeverityIcon: FunctionComponent<Props> = props => {
  const { severityCode } = props
  const Icon = getIconForSeverity(severityCode)
  return Icon ? <Icon /> : <Box width={'24px'} />
}

export default SeverityIcon
