import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

const makeStore = () => {
  return createStore(rootReducer, applyMiddleware(thunkMiddleware))
}

export default makeStore
