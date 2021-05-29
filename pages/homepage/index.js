
import React from 'react'
import { LIST_PRODUCTS, LIST_CATE } from '../../utils/constant'
import styles from './homepage.module.css'
import ListProduct from '../components/listproduct'

export default function HomePage () {
  const renderHomeBanner = () => {
    return (
          <div style={{ flexDirection: 'row' }}>
              <img src={'/banner.png'} width='900px' height='300px'/>
              <img src={'https://salt.tikicdn.com/cache/w408/ts/banner/69/9a/36/dcff148edf2a3918a8ac974d4b75cb20.png.jpg' } width='300px' height='300px'/>
          </div>
    )
  }
  const renderCategory = (cate) => {
    const { id, name, img } = cate || {}
    return (
      <div>
        <a href={'./category/' + id } key={id} className={styles.cateView}>
          <div >
            <div className={styles.imgCate}>
              <img src={img} alt={name}/>
            </div>
            <span>{name}</span>
          </div>
        </a>
      </div>
    )
  }

  const renderListCate = () => {
    return (
      <>
        <div className={styles.list}>
          {LIST_CATE.map((item, index) => (
            renderCategory(item)
          ))}
        </div>
      </>)
  }

  const renderSearchItem = (search) => {
    const { id, name, img } = search || {}
    return (
      <div>
        <a href={'./category/' + id } key={id} className={styles.cateView}>
          <div >
            <div className={styles.imgCate}>
              <img src={img} alt={name}/>
            </div>
            <span>{name}</span>
          </div>
        </a>
      </div>
    )
  }

  const renderLisSearch = () => {
    return (
      <>
        <div className={styles.list}>
          {LIST_CATE.map((item, index) => (
            renderSearchItem(item)
          ))}
        </div>
      </>)
  }

  return (
    <>
      <main className={styles.container}>
        {renderHomeBanner()}
        <div className={styles.block}>
          <div className={styles.header}>
            <span>Danh mục nổi bật</span>
          </div>
          {renderListCate()}
        </div>
        <div className={styles.block}>
          <div className={styles.header}>
            <span>Tìm kiếm nổi bật</span>
          </div>
          {renderLisSearch()}
        </div>
        <div className={styles.block}>
          <div className={styles.header}>
            <span className={styles.header}>Sản phẩm</span>
          </div>
          <ListProduct list={LIST_PRODUCTS}/>
        </div>
      </main>
    </>
  )
}
