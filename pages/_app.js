/* eslint-disable react/prop-types */
import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../reduxcart//stores'
import React from 'react'

function MyApp ({ Component, pageProps }) {
  return <Provider store = {store}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
