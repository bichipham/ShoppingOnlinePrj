import App from 'next/app'
import { Provider } from 'react-redux'
import React from 'react'
import withRedux from 'next-redux-wrapper'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reduxcart/reducers'

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}

    // Anything returned here can be accessed by the client
    console.log('!!!!!!!!1 pageProps ' + JSON.stringify(pageProps))
    return { pageProps: pageProps }
  }

  render () {
    // pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
    const store = createStore(rootReducer)
    const { Component, pageProps } = this.props
    return (

      <Provider store={store}>
        <div style={{ backgroundColor: 'rgb(239, 239, 239)' }}>
            <Component {...pageProps}/>
         </div>

      </Provider>

    )
  }
}

// makeStore function that returns a new store for every request
// const makeStore = () => { return store }

// withRedux wrapper that passes the store to the App Component
// export default withRedux(makeStore)(MyApp)

export default MyApp
