/**
 * Constants enumerating the Application URL.
 * @constant
 * @category Constants
 *
 * @type {object}
 * @property {String} ROOT /
 * @property {String} HOME /home
 * @property {String} ACCOUNT /account
 * @property {String} CONTACT /contact
 * @property {String} PORTAL /portal
 * @property {String} LOGIN /login
 * @property {String} LOGOUT /logout
 * @property {String} UNAUTHORIZED /unauthorized
 * @property {String} PAGE_NOT_FOUND /404
 */
const PATH_CODES = Object.freeze({
  ROOT: '/',
  HOME: '/home',
  RESET_PASSWORD: '/reset-password/',
  RESET_PASSWORD_SENT: '/reset-password/sent/:email',
  RESET_PASSWORD_UPDATE: '/reset-password/token/:token',
  RESET_PASSWORD_REVOKED: '/reset-password/revoke/:token',
  RESET_PASSWORD_UPDATED: '/reset-password/updated/:status',
  PORTAL: '/portal',
  LOGIN: '/login',
  LOGOUT: '/logout',
  UNAUTHORIZED: '/unauthorized',
  PAGE_NOT_FOUND: '/404',
  FORBIDDEN: '/403',
  CONTACT_US: '/contact-us',
  REGISTER: '/register',
  REGISTER_DONE: '/register/done',
  REGISTER_CONFIRM_EMAIL: '/register/confirm/:token',
})

/*
  Utility function that returns an array of the static routes defined by PATH_CODES
  @link PATH_CODES
 */
export const getArrayOfStaticPath = () => {
  const staticPath: string[] = []
  const obj: any = Object
  // eslint-disable-next-line no-unused-vars
  // @ts-ignore
  obj.entries(PATH_CODES).forEach(([, value]) => {
    staticPath.push(value)
  })
  return staticPath
}

export default PATH_CODES
