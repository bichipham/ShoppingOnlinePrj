
import React from 'react'
import styles from './listproduct.module.css'
import PropTypes from 'prop-types'
import { formatNumberToMoney } from '../../../utils/utils'
import { useRouter } from 'next/router'

const ListProduct = ({ list }) => {
  const router = useRouter()
  const renderProduct = (product) => {
    const { id, name, img, price } = product || {}
    return (
            <a key={id} className={styles.product} href={'/product/' + id }>
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
            </a>
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
