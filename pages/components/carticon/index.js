/* eslint-disable react/prop-types */

import React from 'react'
import { GetNumberCart } from '../../../reduxcart/actions'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'

const CartIcon = ({ numInCart }) => {
  const router = useRouter()
  return (
        <div>
            <a onClick={() => router.push('/shoppingcart')}>
                <img src={'/shopping-cart.png'} width={30} height={30}/>
                {numInCart > 0 ? <span style={{ borderRadius: 20, backgroundColor: 'orange', color: 'white', padding: 2 }}>{numInCart}</span> : null}

            </a>
        </div>
  )
}

const mapStateToProps = state => ({
  numInCart: GetNumberCart(state).payload._todoProduct.numberCart
})

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps)(CartIcon)

// export default CartIcon
