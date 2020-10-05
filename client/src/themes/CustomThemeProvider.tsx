import React from 'react'
import { createMuiTheme, Theme, ThemeProvider as MuiThemeProvider } from '@material-ui/core'
import cyan from '@material-ui/core/colors/cyan'
import green from '@material-ui/core/colors/green'
import orange from '@material-ui/core/colors/orange'
import purple from '@material-ui/core/colors/purple'
import red from '@material-ui/core/colors/red'
import { useTheme } from '@material-ui/core/styles'

import Fonts from '../assets/fonts'

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
      typography: {
        fontFamily: [
          'Roboto',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
      shape: {
        borderRadius: 0.5,
      },
      zIndex: {
        appBar: 1200,
        drawer: 1100,
      },
      overrides: {
        MuiCssBaseline: {
          '@global': {
            '@font-face': [
              Fonts.MetropolisRegular,
              Fonts.MetropolisBold,
              Fonts.RobotoRegular,
              Fonts.RobotoMedium,
              Fonts.RobotoBold,
            ],
          },
        },
        // Style sheet name ⚛️
        MuiTableRow: {
          // Name of the rule
          head: {
            // CSS
            // backgroundColor: 'red',
          },
        },
        // Style sheet name ⚛️
        MuiTablePagination: {
          // Name of the rule
          spacer: {
            // CSS
            // display: 'none',
          },
        },
        MuiTableCell: {
          root: {
            '&.statusClose': {
              color: themeOptions.paletteType === 'light' ? purple['500'] : purple['200'],
            },
            '&.statusOpen': {
              color: themeOptions.paletteType === 'light' ? cyan['500'] : cyan['200'],
            },
            '&.statusReOpen': {
              color: orange['500'],
            },
            '&.statusInProgress': {
              color: green['500'],
            },
            '&.statusToBeTested': {
              color: red['500'],
            },
          },
          stickyHeader: {
            // backgroundColor: themeOptions.paletteType === 'light' ? 'lightgrey' : '#000',
          },
        },
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
