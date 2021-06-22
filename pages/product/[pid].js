/* eslint-disable react/prop-types */

import React, { useRef, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { LIST_PRODUCTS } from '../../utils/constant'
import HeaderBar from '../components/headercpn'
import styles from './product.module.css'
import { formatNumberToMoney } from '../../utils/utils'
import QualityInput from '../components/qualityinput'
import ListProduct from '../components/listproduct'
import { AddCart, GetAllProduct } from '../../reduxcart/actions'
import { connect } from 'react-redux'

const Product = ({ products, addCart }) => {
  const router = useRouter()
  const { pid } = router.query
  const product = LIST_PRODUCTS.find((item) => { return item.id === pid })
  const { cateId } = product || {}
  const { name, price, img, isCheapest, specialPrice } = product || {}
  const discount = specialPrice ? Math.floor(((price - specialPrice) / price * 100)) : 0
  const amount = useRef(1)
  const [listSuggest, setListSuggest] = useState([])

  const onChangeQuality = (quality) => {
    amount.current = quality.qual
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
            {specialPrice
              ? <div className={styles.priceView}>
                 <h2>{formatNumberToMoney(specialPrice, 0, 'đ')}</h2>
                 <span className={styles.discount}>{formatNumberToMoney(price, 0, 'đ')}</span>
                 {discount ? <span>{`- ${discount}%`}</span> : null }
              </div>
              : <div>
                  <h2>{formatNumberToMoney(price, 0, 'đ')}</h2>
                </div>}

            <div>
            {isCheapest ? <img src='/cheapest.png' style={{ height: '18px' }}/> : null}
            </div>
            <h3>Số lượng: </h3>
            <QualityInput initQuality={1} minimumQuality={1} callback={onChangeQuality} />
            <div className={styles.btnBuy}>
              <button onClick={() => addCart({ ...product, quality: amount.current })}>Chọn mua</button>
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

// export default Product

const mapStateToProps = state => ({
  products: GetAllProduct(state)
})

const mapDispatchToProps = {
  addCart: AddCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
