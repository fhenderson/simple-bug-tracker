import Cookie from 'js-cookie'

const cookieKey = 'AUTHORIZATION'

function getToken() {
  return Cookie.get(cookieKey)
}

function getAuthorizationHeader(token = getToken()) {
  return {
    Authorization: getBearer(token)
  }
}

function getBearer(token = getToken()) {
  return `Bearer ${token}`
}

function setToken(token: string | object) {
  Cookie.set(cookieKey, token, { path: '/' })
}

function removeToken() {
  Cookie.remove(cookieKey, { path: '/' })
}

export { getToken, setToken, removeToken, getBearer, getAuthorizationHeader }
