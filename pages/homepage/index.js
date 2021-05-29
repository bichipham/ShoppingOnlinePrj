
import React from 'react'
import { LIST_PRODUCTS, LIST_CATE, POPULAR_KEYWORD } from '../../utils/constant'
import styles from './homepage.module.css'
import ListProduct from '../components/listproduct'
import { useRouter } from 'next/router'

export default function HomePage () {
  const router = useRouter()
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
        <a href={'./category/' + id } key={id} className={styles.cateView}>
          <div >
            <div className={styles.imgCate}>
              <img src={img} alt={name}/>
            </div>
            <div style={{ marginTop: 5 }}>
              <span>{name}</span>
            </div>
          </div>
        </a>
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
    const { id, searchKey, imgList } = search || {}
    return (

        <a key={id} className={styles.searchView} onClick={() => router.push('./search?s=' + searchKey)}>
            <div className={styles.listImg} >
              {imgList.map((imgUrl, index) => (
                <img src={imgUrl} width='50px' height='50px' key={id + '_' + index}/>
              ))}
            </div>
            <div className={styles.searchText} >
              <span>{searchKey}</span>
            </div>

        </a>

    )
  }

  const renderLisSearch = () => {
    return (
      <>
        <div className={styles.listKeyword}>
          {POPULAR_KEYWORD.map((item, index) => (
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
