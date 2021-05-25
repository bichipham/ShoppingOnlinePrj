
import React from 'react'
import { useRouter } from 'next/router'
import { LIST_PRODUCTS } from '../../utils/constant'
import styles from './category.module.css'
import HeaderBar from '../components/headercpn'

export default function CategoryAA () {
  const router = useRouter()
  const { id } = router.query
  const filterProducts = LIST_PRODUCTS.filter((item) => { return item.cateId === id })

  const renderProduct = (product) => {
    const { id, name, img, price } = product || {}
    return (
      <div key={id}>
       <img src={img} alt={name} height="150" width="150" />
       <h4>{name}</h4>
       <h5>{price}</h5>
      </div>
    )
  }

  const renderListProduct = () => {
    return (
      <>
         <div className={styles.list}>
          {filterProducts.map((item, index) => (
            renderProduct(item)
          ))}
        </div>
      </>
    )
  }

  return (
    <>
      <HeaderBar/>
      <div className={styles.container}>
          <h1>Danh sách sản phẩm thuộc danh mục</h1>
          {renderListProduct()}
      </div>
    </>
  )
}
