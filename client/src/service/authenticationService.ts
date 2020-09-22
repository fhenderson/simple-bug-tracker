import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import { ERRORS } from '../lib/constants'
import { environmentService } from './environmentService'
import { BehaviorSubject } from 'rxjs'
import { setToken, getBearer, removeToken } from '../lib/token'

const currentLocaleStorageUser = localStorage.getItem('currentUser')
const currentUserSubject = new BehaviorSubject(currentLocaleStorageUser ? JSON.parse(currentLocaleStorageUser) : null)

const baseUri = environmentService?.currentEnvValue?.REACT_APP_SERVER_ADDRESS?.replace('PORT', environmentService?.currentEnvValue?.REACT_APP_SERVER_PORT || '')

const getAuthUri = () => {
  return `${baseUri}/auth/login`
}

const getUserProfileUri = () => {
  return `${baseUri}/profile`
}

export const authenticate = async (uri: string, data: any, requestOptions: any) => {
  return await axios
    .post(uri, data, requestOptions)
    .then((response: AxiosResponse) => {
      // handle success
      const token: string = response.data.access_token
      setToken(token)
      return token
    })
    .catch((error: { response: { status: number; data: { message: string | undefined } } }) => {
      // handle error
      throw new Error(
        error.response.status >= 500 ? ERRORS.INTERNAL_SERVER_ERROR : error.response.data.message
      )
    })
}

const getUserProfile = (token: string) => {
  const uri = getUserProfileUri()
  const requestOptions: AxiosRequestConfig = {
    method: 'GET',
    headers: {
      Accept: '*/*',
      Authorization: getBearer(token),
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    }
  }
  return axios
    .get(uri, requestOptions)
    .then((response: AxiosResponse) => {
      // handle success
      return response
    })
    .catch((error: { response: { status: number; data: { message: string | undefined } } }) => {
      // handle error
      throw new Error(
        error.response.status >= 500 ? ERRORS.INTERNAL_SERVER_ERROR : error.response.data.message
      )
    })
}

const login = async (values: any) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json'
    }
  }
  const uri = getAuthUri()
  const token = await authenticate(uri, values, requestOptions)
  const response = await getUserProfile(token)
  authenticationService.updateCurrentUserValue(response.data)
  return response
}

const logout = () => {
  removeToken()
}

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
