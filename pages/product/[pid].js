
import React, { useRef, useEffect, useLayoutEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { LIST_PRODUCTS } from '../../utils/constant'
import HeaderBar from '../components/headercpn'
import styles from './product.module.css'
import { formatNumberToMoney } from '../../utils/utils'
import { QualityInput, ListProduct } from '../components'

export default function Product () {
  const router = useRouter()
  const { pid } = router.query
  console.log('!!!!!1pid ' + pid)
  const product = LIST_PRODUCTS.find((item) => { return item.id === pid })
  const { cateId } = product || {}
  const { name, price, img } = product || {}
  const amount = useRef(1)
  const [listSuggest, setListSuggest] = useState([])

  const onChangeQuality = (quality) => {
    amount.current = quality
  }

  useEffect(() => {
    let tmpList = []
    if (cateId) { tmpList = LIST_PRODUCTS.filter((item) => { return (item.cateId === cateId && item.id !== product.id) }) }
    setListSuggest(tmpList)
    return () => {
    }
  }, [cateId])

  return (
    <>
      <HeaderBar/>
      <div className={styles.container}>
        <div className={styles.block}>
          <div className={styles.imgView}>
            <img src={img} />
          </div>
          <div className={styles.info}>
            <h1>{name}</h1>
            <h2>{formatNumberToMoney(price, 0, 'đ')}</h2>
            <h3>Số lượng: </h3>
            <QualityInput initQuality={1} minimumQuality={0} callback={onChangeQuality} />
            <div className={styles.btnBuy}>
              <button>Chọn mua</button>
            </div>
          </div>
        </div>
        <div className={styles.block}>
          <div>
            <h2>Sản phẩm tương tự</h2>
            <ListProduct list={listSuggest}/>
          </div>
        </div>
      </div>
    </>
  )
}
