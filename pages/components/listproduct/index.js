
import React from 'react'
import styles from './listproduct.module.css'
import PropTypes from 'prop-types'
import { formatNumberToMoney } from '../../../utils/utils'
import Link from 'next/link'
export default function ListProduct ({ list }) {
  const renderProduct = (product) => {
    const { id, name, img, price, specialPrice, isCheapest, isFreeShip } = product || {}
    const finalPrice = specialPrice || price
    const discount = specialPrice ? Math.floor(((price - specialPrice) / price * 100)) : 0
    return (
      <Link href={'/product/' + id } key={id} >
            <a className={styles.product} >
              <div className={styles.imgView}>
                  <img src={img} alt={name} />
              </div>
                  {/* {isFreeShip ? <img src='/cheapest.png' className={styles.freeship}/> : null} */}

              <div className={styles.infoView}>
                  <div>
                    <span className={styles.name}>{name}</span>
                  </div>
                  <div className={styles.price}>
                    <span>{formatNumberToMoney(finalPrice, 0, 'đ')}</span>
                    {discount ? <span className={styles.discount}>{`- ${discount}%`}</span> : null }
                  </div>
                  <div>
                    {isCheapest ? <img src='/cheapest.png' height="18px"/> : null}
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
