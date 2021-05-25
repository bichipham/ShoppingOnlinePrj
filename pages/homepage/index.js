
import React from 'react'
import { LIST_PRODUCTS, LIST_CATE } from '../../utils/constant'
import styles from './homepage.module.css'
import ListProduct from '../components/listproduct'

export default function HomePage () {
  const renderHomeBanner = () => {
    return (
          <>
              <img src={'/banner.png'} width={1000} height={200}/>
          </>
    )
  }
  const renderCategory = (cate) => {
    const { id, name, img } = cate || {}
    return (
      <a href={'./category/' + id } key={id}>
        <div>
        <img src={img} alt={name} height="150" width="150" />
        <h4>{name}</h4>
        </div>
      </a>
    )
  }

  const renderListCate = () => {
    return (
      <>
        <h2>Danh mục nổi bật</h2>
        <div className={styles.list}>
          {LIST_CATE.map((item, index) => (
            renderCategory(item)
          ))}
        </div>
      </>)
  }
  return (
    <div className={styles.container}>
      <main>
        {renderHomeBanner()}
        {renderListCate()}
        <h2>Sản phẩm</h2>
        <ListProduct list={LIST_PRODUCTS}/>
      </main>
    </div>
  )
}
