/* eslint-disable node/no-callback-literal */
/* eslint-disable react/prop-types */
import React, { useCallback, useRef } from 'react'
import styles from './cartitem.module.css'
import QualityInput from '../qualityinput'
import { formatNumberToMoney } from '../../../utils/utils'
import { LIST_PRODUCTS } from '../../../utils/constant'

const CartItem = ({ item, callback, decreaseQuantity, addCart, deleteCart }) => {
  const MinimumQuality = 1
  const { name, img, id, price, quantity } = item || {}
  const productDetail = LIST_PRODUCTS.find((item) => { return item.id === id })
  const { specialPrice, isFreeShip } = productDetail || {}
  const discount = specialPrice ? Math.floor(((price - specialPrice) / price * 100)) : 0
  const finalPrice = specialPrice || price
  const currentQuantity = useRef(quantity)

  const onChangeQuality = useCallback(
    quality => {
      if (quality.type === 'add') {
        callback({ id: item.id, quality: 1, type: 'add' })
      } else if (quality.type === 'minus' && quality.qual >= MinimumQuality) {
        callback({ id: item.id, quality: 1, type: 'minus' })
      } else if (quality.type === 'isMinimum') {
        callback({ id: item.id, type: 'delete' })
      }
      currentQuantity.current = quality.qual
    },
    []
  )

  return (
        <div className={styles.row} key={id}>
            <div className={styles.col1} >
                <div className={styles.imgView}>
                    <img src={img} />
                </div>
                <div>
                {!isFreeShip ? <img src='/ic_fast.png' className={styles.freeship}/> : null}
                    <span>{name}</span>
                </div>
            </div>
            <div className={styles.col2} >
            {specialPrice
              ? <div className={styles.priceView}>
                 <h3>{formatNumberToMoney(specialPrice, 0, 'đ')}</h3>
                 <span className={styles.discount}>{formatNumberToMoney(price, 0, 'đ')}</span>
              </div>
              : <div>
                  <h3>{formatNumberToMoney(finalPrice, 0, 'đ')}</h3>
                </div>}
            </div>
            <div className={styles.col3} >
                <QualityInput initQuality={quantity} minimumQuality={MinimumQuality} callback={onChangeQuality}/>
            </div>
            <div className={styles.col4} >
                <span>{formatNumberToMoney(finalPrice * currentQuantity.current, 0, 'đ')}</span>
            </div>
            <div className={styles.col5} >
                <img src='/trash.svg' onClick={() => callback({ id: item.id, type: 'delete' })}/>
            </div>
        </div>
  )
}

export default CartItem
