import React from 'react'
import { createMuiTheme, Theme, ThemeProvider as MuiThemeProvider } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

interface ThemeProviderProps {
  children: React.ReactNode
  theme: Theme
}

const ThemeDispatchContext = React.createContext<any>(null)

// eslint-disable-next-line react/prop-types
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  const themeInitialOptions = {
    paletteType: 'light',
  }

  const [themeOptions, dispatch] = React.useReducer((state: any, action: any) => {
    switch (action.type) {
      case 'changeTheme':
        return {
          ...state,
          paletteType: action.payload,
        }
      default:
        throw new Error()
    }
  }, themeInitialOptions)

  const memoizedTheme = React.useMemo(() => {
    return createMuiTheme({
      ...theme,
      palette: {
        type: themeOptions.paletteType,
      },
    })
  }, [theme, themeOptions.paletteType])

  return (
    <MuiThemeProvider theme={memoizedTheme}>
      <ThemeDispatchContext.Provider value={dispatch}>{children}</ThemeDispatchContext.Provider>
    </MuiThemeProvider>
  )
}

export default ThemeProvider

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useChangeTheme = () => {
  const dispatch = React.useContext(ThemeDispatchContext)
  const theme = useTheme()
  return React.useCallback(
    () =>
      dispatch({
        type: 'changeTheme',
        payload: theme.palette.type === 'light' ? 'dark' : 'light',
      }),
    [theme.palette.type, dispatch]
  )
}
