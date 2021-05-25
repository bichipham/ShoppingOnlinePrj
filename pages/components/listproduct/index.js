
import React from 'react'
import styles from './listproduct.module.css'
import PropTypes from 'prop-types'

const ListProduct = ({ list }) => {
  const renderProduct = (product) => {
    const { id, name, img, price } = product || {}
    return (
            <div key={id} style={{ padding: '2px' }}>
              <img src={img} alt={name} height="150" width="150" />
              <h4>{name}</h4>
              <h5>{price}</h5>
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
