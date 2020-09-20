import { createContext, useContext } from 'react'

type AuthContext = {
  authTokens: any
}
const authContext: AuthContext = { authTokens: null }

export const AuthContext = createContext(authContext)

export function useAuth(): AuthContext {
  return useContext(AuthContext)
}
