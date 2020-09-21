import { BehaviorSubject } from 'rxjs'

const currentLocaleStorageToken = localStorage.getItem('token')
const currentTokenSubject = new BehaviorSubject(currentLocaleStorageToken ? JSON.parse(currentLocaleStorageToken) : null)

export const tokenService = {
  currentToken: currentTokenSubject.asObservable(),
  get currentTokenValue() {
    return currentTokenSubject.value
  },
  updateCurrentTokenValue(value: any) {
    currentTokenSubject.next(value)
    localStorage.setItem('token', value)
  }
}

export default tokenService
