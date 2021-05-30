/* eslint-disable react/prop-types */

import React, { useRef, useEffect, useLayoutEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { LIST_PRODUCTS } from '../../utils/constant'
import HeaderBar from '../components/headercpn'
import styles from './product.module.css'
import { formatNumberToMoney } from '../../utils/utils'
import { QualityInput, ListProduct } from '../components'
import { AddCart } from '../../reduxcart/actions'
import { connect } from 'react-redux'

const Product = ({ AddCart }) => {
  const router = useRouter()
  const { pid } = router.query
  console.log('!!!!! pid ' + pid)
  const product = LIST_PRODUCTS.find((item) => { return item.id === pid })
  const { cateId } = product || {}
  const { name, price, img, id } = product || {}
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
              <button onClick={() => AddCart(product)}>Chọn mua</button>
            </div>
          </div>
        </div>
        <div className={styles.block}>
          <div>
            <h2>Sản phẩm tương tự</h2>
            <ListProduct list={listSuggest}/>
          </div>
        </div>
        <div>
          <img src={'https://salt.tikicdn.com/ts/tka/79/03/75/06d782080e61697b8bbf4909f9bd7e16.png' } width='100%' height='300px'/>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {
  AddCart: AddCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
