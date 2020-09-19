import MetropolisMediumFont from './fonts/Metropolis-Medium.woff'
import MetropolisBoldFont from './fonts/Metropolis-SemiBold.woff'
import RobotoBoldFont from './fonts/Roboto-Bold.woff'
import RobotoMediumFont from './fonts/Roboto-Medium.woff'
import RobotoRegularFont from './fonts/Roboto-Regular.woff'

const MetropolisRegular = {
  fontFamily: 'Metropolis',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `
      local('Metrolpolis'),
      local('Metrolpolis-Medium'),
      url(${MetropolisMediumFont}) format('woff')
    `,
}

const MetropolisBold = {
  fontFamily: 'Metropolis',
  fontStyle: 'normal',
  fontWeight: 500,
  src: `
      local('Metrolpolis'),
      local('Metrolpolis-Bold'),
      url(${MetropolisBoldFont}) format('woff')
    `,
}

const RobotoRegular = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `
      local('Roboto'),
      local('Roboto-Regular'),
      url(${RobotoRegularFont}) format('woff')
    `,
}

const RobotoMedium = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 500,
  src: `
        local('Roboto'),
        local('Roboto-Medium'),
        url(${RobotoMediumFont}) format('woff')
      `,
}

const RobotoBold = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 700,
  src: `
      local('Roboto'),
      local('Roboto-Bold'),
      url(${RobotoBoldFont}) format('woff')
    `,
}

export default {
  MetropolisRegular,
  MetropolisBold,
  RobotoRegular,
  RobotoMedium,
  RobotoBold,
}
