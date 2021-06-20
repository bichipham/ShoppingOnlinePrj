
import React from 'react'
import { LIST_PRODUCTS, LIST_CATE, POPULAR_KEYWORD } from '../../utils/constant'
import styles from './homepage.module.css'
import ListProduct from '../components/listproduct'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Slider from 'react-slick'
import SimpleSlider from '../components/slickslide'

export default function HomePage () {
  const router = useRouter()
  const renderHomeBanner = () => {
    return (
    <div style={{ flexDirection: 'row', display: 'flex' }}>
             <SimpleSlider />
       <img src={'https://salt.tikicdn.com/cache/w408/ts/banner/69/9a/36/dcff148edf2a3918a8ac974d4b75cb20.png.jpg' } width='300px' height='300px'/>
     </div>
    )
  }

  const renderCategory = (cate) => {
    const { id, name, img } = cate || {}
    return (
      <Link href={`/category/${id}`} key={id}>
        <a style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '5px', paddingBottom: '5px', textDecoration: 'none' }}>
        <div className={styles.cateBG}>
            <div className={styles.imgCate}>
              <img src={img} alt={name}/>
            </div>
        </div>
          <div style={{ marginTop: 5 }}>
                <span>{name}</span>
          </div>
        </a>
      </Link>
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
      <Link href={`./search?s=${searchKey}`} key={id}>
        <a className={styles.searchView}>
            <div className={styles.listImg} >
              {imgList.map((imgUrl, index) => (
                <div key={id + '_' + index}>
                  <img src={imgUrl} style={{ width: '80px', maxHeight: '80px' }}/>
                </div>
              ))}
            </div>
            <div className={styles.searchText} >
              <span>{searchKey}</span>
            </div>
        </a>
      </Link>

    )
  }

  const renderListSearch = () => {
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
          {renderListSearch()}
        </div>
        <div className={styles.block}>
          <div className={styles.header}>
            <span>Sản phẩm</span>
          </div>
          <ListProduct list={LIST_PRODUCTS}/>
        </div>
      </main>
    </>
  )
}
