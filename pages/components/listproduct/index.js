
import React from 'react'
import styles from './listproduct.module.css'
import PropTypes from 'prop-types'
import { formatNumberToMoney } from '../../../utils/utils'

const ListProduct = ({ list }) => {
  const renderProduct = (product) => {
    const { id, name, img, price } = product || {}
    return (
            <div key={id} className={styles.product}>
              <div className={styles.imgView}>
                  <img src={img} alt={name}/>
              </div>
              <div className={styles.infoView}>
                  <div className={styles.name}>
                    <span>{name}</span>
                  </div>
                  <div className={styles.price}>
                    <span>{formatNumberToMoney(price, 0, 'đ')}</span>
                  </div>
              </div>
            </div>
    )
  }
  return (
      <>
         <div className={styles.list}>
          {list.map((product, index) => (
            renderProduct(product)
          ))}
        </div>
      </>
  )
}

ListProduct.propTypes = {
  list: PropTypes.array
}
export default ListProduct
