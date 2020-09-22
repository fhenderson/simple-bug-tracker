import axios from 'axios'
import { ERRORS } from '../lib/constants'
import { environmentService } from './environmentService'
import { BehaviorSubject } from 'rxjs'

const currentLocaleStorageUser = localStorage.getItem('currentUser')
const currentUserSubject = new BehaviorSubject(currentLocaleStorageUser ? JSON.parse(currentLocaleStorageUser) : null)

const getAuthUri = () => {
  const uri = environmentService?.currentEnvValue?.REACT_APP_SERVER_ADDRESS?.replace('PORT', environmentService?.currentEnvValue?.REACT_APP_SERVER_PORT || '')
  return `${uri}/auth/login`
}

export const authenticate = (uri: string, data: any, requestOptions: any) => {
  return axios
    .post(uri, data, requestOptions)
    .then((response: any) => {
      // handle success
      console.log({ response })

      return response
    })
    .catch((error: { response: { status: number; data: { message: string | undefined } } }) => {
      // handle error
      throw new Error(
        error.response.status >= 500 ? ERRORS.INTERNAL_SERVER_ERROR : error.response.data.message
      )
    })
}

const login = (values: any) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json'
    }
  }
  const uri = getAuthUri()
  return authenticate(uri, values, requestOptions)
}

const logout = () => {}

export const authenticationService = {
  login,
  logout,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value
  },
  updateCurrentUserValue(value: any) {
    currentUserSubject.next(value)
  },
  getUserManagementUri: getAuthUri
}

export default authenticationService
