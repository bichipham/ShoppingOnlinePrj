/* eslint-disable react/prop-types */

import React from 'react'
import { GetAllProduct } from '../../../reduxcart/actions'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'

const CartIcon = ({ carts }) => {
  const router = useRouter()
  // const sum = carts.reduce(function (sum, item) {
  //   const updatedSum = sum + item.quantity
  //   return updatedSum
  // }, 0)
  return (
        <div>
            <a onClick={() => router.push('/shoppingcart')}>
                <img src={'/shopping-cart.png'} width={30} height={30}/>
                {carts > 0
                  ? <span style={{
                    borderRadius: 40,
                    backgroundColor: 'orange',
                    color: 'white',
                    paddingLeft: '7px',
                    paddingRight: '7px'
                  }}>{carts}</span>
                  : null}

            </a>
        </div>
  )
}

const getAllItemInCarts = (carts) => {

}

const mapStateToProps = state => ({
  carts: GetAllProduct(state).payload?._todoProduct.Carts.reduce(function (sum, item) {
    const updatedSum = sum + item.quantity
    return updatedSum
  }, 0)
})

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps)(CartIcon)

// export default CartIcon
