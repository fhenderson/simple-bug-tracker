import React, { forwardRef } from 'react'
import { Helmet } from 'react-helmet'

interface IOwnProps {
  children: any
  title: string
  // Taking care of the typescript warning on adding other props like 'className'
  [propName: string]: any
}

type IProps = IOwnProps

const Page = forwardRef(({ children, title = '', ...rest }: IProps, ref: any) => {
  return (
    <div ref={ref} {...rest}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  )
})
Page.displayName = 'Page'

export default Page
