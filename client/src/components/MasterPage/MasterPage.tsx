import React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../Header/Header'

type Props = {
  children: any
}
const MasterPage = (props: Props): any => {
  const { children } = props
  return (
    <>
      <Helmet>
        <title>Simple Bugtracker</title>
      </Helmet>
      <Header />
      {children}
      <div className="MasterPage" />
    </>
  )
}

export default MasterPage
