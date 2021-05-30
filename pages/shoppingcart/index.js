/* eslint-disable react/prop-types */

import React, { useState, useCallback } from 'react'
import { GetAllProduct, GetNumberCart, IncreaseQuantity, DecreaseQuantity } from '../../reduxcart/actions'
import { connect } from 'react-redux'
import HeaderBar from '../components/headercpn'
import styles from './shoppingcart.module.css'
import { QualityInput } from '../components'
import { calculateTotalMoney, formatNumberToMoney } from '../../utils/utils'

function ShoppingCart ({ products, total, increaseQuantity, decreaseQuantity }) {
  const { Carts = [] } = products?.payload?._todoProduct
  const totalMoney = calculateTotalMoney(Carts)
  console.log('!!!!!!!!!! cart ' + JSON.stringify(Carts))

  const renderCartItem = (item) => {
    const { name, img, id, price, quantity } = item || {}

    const onChangeQuality = useCallback(
      quality => {
        if (quality.type === 'add') {
          increaseQuantity(item)
        } else if (quality.type === 'minus') {
          decreaseQuantity(item)
        }
      },
      []
    )

    return (
        <div className={styles.cartItem} key={id}>
            <div className={styles.imgView} >
                <img src={img} />
            </div>
            <div className={styles.infoView} >
                <span>{name}</span>
                <h4>{formatNumberToMoney(price, 0, 'đ')}</h4>
                <QualityInput initQuality={quantity} minimumQuality={1} callback={onChangeQuality}/>
            </div>

        </div>
    )
  }

  return (
        <>
            <HeaderBar/>
            <div className={styles.container}>
                <div className={styles.cartView}>
                    <div>
                        {Carts.map((item, index) => (renderCartItem(item)))}
                    </div>
                    <div className={styles.totalView} >
                        <span>Tạm tính:</span><h4>{formatNumberToMoney(totalMoney, 0, 'đ')}</h4>
                    </div>
                </div>
            </div>
        </>
  )
}

const mapStateToProps = state => ({
  products: GetAllProduct(state),
  total: GetNumberCart(state)
})

const mapDispatchToProps = {
  increaseQuantity: IncreaseQuantity,
  decreaseQuantity: DecreaseQuantity
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
