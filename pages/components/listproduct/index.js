
import React from 'react'
import styles from './listproduct.module.css'
import PropTypes from 'prop-types'
import { formatNumberToMoney } from '../../../utils/utils'
import { useRouter } from 'next/router'
import Link from 'next/link'
export default function ListProduct ({ list }) {
  const router = useRouter()
  const renderProduct = (product) => {
    const { id, name, img, price } = product || {}
    return (
      <Link href={'/product/' + id } key={id} >
            <a className={styles.product} >
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
      </Link>
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
