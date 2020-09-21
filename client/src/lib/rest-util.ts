import * as HttpStatus from 'http-status-codes'
import Axios, { AxiosResponse } from 'axios'
import { getToken } from './token'

const isOK = (response: AxiosResponse): boolean => response.status === HttpStatus.OK
const isUnauthorized = (response: { status: any }) => response.status === HttpStatus.UNAUTHORIZED

/**
 * Get common axios config headers
 * @param method
 * @param token
 * @param contentType
 * @returns {{headers: {Authorization: *, 'Content-Type': string}, method: string}}
 */
const getConfig = (method = 'GET', token: string, contentType = 'application/json'): any => {
  return {
    method: method,
    headers: {
      'Content-Type': contentType,
      Authorization: token
    }
  }
}

function handleAxiosResponseErrorInterceptor(error: { response: { data: any; status: any; headers: any }; request: any; message: any; config: any }) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log('error.response.data:', error.response.data)
    console.log('error.response.status', error.response.status)
    console.log('error.response.headers', error.response.headers)
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log('error.request', error.request)
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message)
  }
  console.log(error.config)
  throw error
}

const getAxios = () => {
  const axios = Axios.create({
    baseURL: '',//environmentService.currentEnvValue.REACT_APP_URI_BASE || window['ENV'].REACT_APP_URI_BASE,
    headers: {
      Authorization: 'Bearer ' + getToken(),
      'Content-Type': 'application/json'
    }
  })
  axios.interceptors.response.use(undefined, handleAxiosResponseErrorInterceptor)
  return axios
}

export { getConfig, isOK, isUnauthorized, getAxios }
