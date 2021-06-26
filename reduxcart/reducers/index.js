/* eslint-disable no-case-declarations */
import { combineReducers } from 'redux'
import { GET_ALL_PRODUCT, GET_NUMBER_CART, ADD_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, DELETE_CART } from '../actions'

const initProduct = {
  numberCart: 0,
  Carts: [],
  _products: []
}

function todoProduct (state = initProduct, action) {
  console.log('!!!!!!!!!!!!1 todoProduct action ' + JSON.stringify(action))
  console.log('!!!!!!!!!!!!1 todoProduct state ' + JSON.stringify(state))
  let exitItemIndex = -1
  switch (action.type) {
    case GET_ALL_PRODUCT:
      return {
        ...state
      }
    case GET_NUMBER_CART:
      return {
        ...state
      }
    case ADD_CART:
      exitItemIndex = state.Carts.findIndex((item, index) => { return item.id === action.payload.id })
      if (exitItemIndex >= 0) {
        state.Carts[exitItemIndex].quantity += action.payload.quality
      } else {
        const cart = {
          id: action.payload.id,
          quantity: action.payload.quality,
          name: action.payload.name,
          img: action.payload.img,
          price: action.payload.price
          // specialPrice: action.payload.price
        }
        state.Carts.push(cart)
      }
      state.numberCart += action.payload.quality
      return {
        ...state
      }

    case DECREASE_QUANTITY:
      exitItemIndex = state.Carts.findIndex((item, index) => { return item.id === action.payload.id })
      if (exitItemIndex >= 0) {
        state.Carts[exitItemIndex].quantity -= action.payload.quality
      }
      state.numberCart -= action.payload.quality
      return {
        ...state
      }

    case DELETE_CART:
      console.log('!!!!!! DELETE action.payload ' + JSON.stringify(action.payload))
      exitItemIndex = state.Carts.findIndex((item, index) => { return item.id === action.payload.id })
      let quantity_ = 0
      if (exitItemIndex >= 0) {
        quantity_ = state.Carts[exitItemIndex].quantity
        state.numberCart = state.numberCart - quantity_
        state.Carts.splice(exitItemIndex, 1)
      }
      return {
        ...state
      }

    default:
      return state
  }
}
const rootReducer = combineReducers({
  _todoProduct: todoProduct
})
export default rootReducer
