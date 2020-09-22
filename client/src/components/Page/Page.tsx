import React, { forwardRef } from 'react'
import { Helmet } from 'react-helmet'
import useTheme from '@material-ui/core/styles/useTheme'

import ThemeProvider from '../../themes/CustomThemeProvider'

interface IOwnProps {
  children: any
  title: string
  // Taking care of the typescript warning on adding other props like 'className'
  [propName: string]: any
}

type IProps = IOwnProps

const Page = forwardRef(({ children, title = '', ...rest }: IProps, ref: any) => {
  const theme = useTheme()
  return (
    <div ref={ref} {...rest}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  )
})
Page.displayName = 'Page'

export default Page
