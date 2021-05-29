
import React from 'react'
import { useRouter } from 'next/router'
import { LIST_PRODUCTS } from '../../utils/constant'
import styles from './category.module.css'
import HeaderBar from '../components/headercpn'
import ListProduct from '../components/listproduct'

export default function Category () {
  const router = useRouter()
  const { id } = router.query
  const filterProducts = LIST_PRODUCTS.filter((item) => { return item.cateId === id })

  return (
    <>
      <HeaderBar/>
      <div className={styles.container}>
          <h1>Danh sách sản phẩm thuộc danh mục</h1>
          <ListProduct list={filterProducts}/>
      </div>
    </>
  )
}
