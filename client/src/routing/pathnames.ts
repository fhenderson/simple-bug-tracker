/**
 * Constants enumerating the Application URL.
 * @constant
 * @category Constants
 *
 * @type {object}
 * @property {String} ROOT /
 * @property {String} HOME /home
 * @property {String} PORTAL /portal
 * @property {String} LOGIN /login
 * @property {String} LOGOUT /logout
 * @property {String} UNAUTHORIZED /unauthorized
 * @property {String} PAGE_NOT_FOUND /404
 * @property {String} FORBIDDEN /403
 * @property {String} REGISTER /register
 * @property {String} BUGS /bugs
 * @property {String} BUGS_NEW /bugs/create
 * @property {String} BUGS_EDIT /bugs/edit
 */
const PATH_CODES = Object.freeze({
  ROOT: '/',
  HOME: '/home',
  PORTAL: '/portal',
  LOGIN: '/login',
  LOGOUT: '/logout',
  UNAUTHORIZED: '/unauthorized',
  PAGE_NOT_FOUND: '/404',
  FORBIDDEN: '/403',
  REGISTER: '/register',
  BUGS: '/bugs',
  BUGS_NEW: '/bugs/create',
  BUGS_EDIT: '/bugs/edit',
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
