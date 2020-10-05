import { createMuiTheme } from '@material-ui/core'

const muiBaseTheme = createMuiTheme();

export const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
  overrides: {
    MuiCard: {
      root: {
        "&.MuiEngagementCard--01": {
          transition: "0.3s",
          maxWidth: 300,
          margin: "auto",
          boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
          "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
          },
          "& .MuiCardMedia-root": {
            paddingTop: "56.25%"
          },
          "& .MuiCardContent-root": {
            textAlign: "left",
            padding: muiBaseTheme.spacing.length * 3
          },
          "& .MuiDivider-root": {
            margin: `${muiBaseTheme.spacing.length * 3}px 0`
          },
          "& .MuiTypography--heading": {
            fontWeight: "bold"
          },
          "& .MuiTypography--subheading": {
            lineHeight: 1.8
          },
          "& .MuiAvatar-root": {
            display: "inline-block",
            border: "2px solid white",
            "&:not(:first-of-type)": {
              marginLeft: -muiBaseTheme.spacing.length
            }
          }
        }
      }
    },
    // Style sheet name ⚛️
    MuiTableRow: {
      // Name of the rule
      head: {
        // CSS
        backgroundColor: 'red'
      },
      hover: {
        color: 'black',
        '&:hover > td': {
          color: 'white'
        },
        '&:hover > td button': {
          color: 'white'
        },
        '&:hover > td svg': {
          color: 'white'
        }
      }
    },
    // Style sheet name ⚛️
    MuiTablePagination: {
      // Name of the rule
      spacer: {
        // CSS
        display: 'none'
      },
      caption: {
        flex: '1',
        width: '100%'
      }
    },
    MuiTableCell: {
      root: {
        "&:hover": {
          borderColor: 'red',
          boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        },
        // '&.MuiTableCell': {
        //   backgroundColor: '#000',
        //   color: '#FFF'
        // }
      },
      stickyHeader: {
        backgroundColor: '#000',
        color: '#FFF'
      }
    }
  }
})