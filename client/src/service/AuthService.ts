import axios from 'axios'
import { ERRORS } from '../lib/constants'

const AuthService = () => {
  // @ts-ignore
  login = new Promise()
}

export const authenticate = (uri: string, data: any, requestOptions: any) =>
  axios
    .post(uri, data, requestOptions)
    .then((response: any) => {
      // handle success

      return response
    })
    .catch((error: { response: { status: number; data: { message: string | undefined } } }) => {
      // handle error
      throw new Error(
        error.response.status >= 500 ? ERRORS.INTERNAL_SERVER_ERROR : error.response.data.message
      )
    })


export default AuthService
