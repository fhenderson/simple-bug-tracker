import 'react-app-polyfill/ie11' //for ie-11
import 'react-app-polyfill/stable' //for ie-11

import React from 'react'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'

import './lib/polyfill'

import App from './App'
import * as serviceWorker from './serviceWorker'

import './index.css'

ReactDOM.render(
  <>
    <Helmet>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
    </Helmet>

    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
