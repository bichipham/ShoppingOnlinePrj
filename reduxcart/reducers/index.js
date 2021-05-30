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
  let selectItem = {}
  let newCart = []
  switch (action.type) {
    case GET_ALL_PRODUCT:
      return {
        ...state,
        _products: action.payload
      }
    case GET_NUMBER_CART:
      return {
        ...state
      }
    case ADD_CART:
      const exitItemIndex = state.Carts.findIndex((item, index) => { return item.id === action.payload.id })
      if (exitItemIndex >= 0) {
        state.Carts[exitItemIndex].quantity += action.payload.quality
      } else {
        const cart = {
          id: action.payload.id,
          quantity: action.payload.quality,
          name: action.payload.name,
          img: action.payload.img,
          price: action.payload.price
        }
        state.Carts.push(cart)
      }
      return {
        ...state,
        numberCart: state.numberCart + action.payload.quality
      }

    case INCREASE_QUANTITY:
      selectItem = state.Carts.find(item => { return action.payload.id === item.id })
      selectItem.quantity++
      newCart = { ...state.Carts, ...selectItem }
      state.numberCart++
      return {
        ...state,
        ...{ Cart: newCart }
      }

    case DECREASE_QUANTITY:
      selectItem = state.Carts.find(item => { return action.payload.id === item.id })
      selectItem.quantity--
      newCart = { ...state.Carts, ...selectItem }
      state.numberCart--
      return {
        ...state,
        ...{ Cart: newCart }
      }

    case DELETE_CART:
      const quantity_ = state.Carts[action.payload].quantity
      return {
        ...state,
        numberCart: state.numberCart - quantity_,
        Carts: state.Carts.filter(item => {
          return item.id !== state.Carts[action.payload].id
        })
      }

    default:
      return state
  }
}
const rootReducer = combineReducers({
  _todoProduct: todoProduct
})
export default rootReducer
