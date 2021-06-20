/* eslint-disable react/prop-types */

import React, { useEffect, useState, useMemo } from 'react'

import { LIST_PRODUCTS, LIST_CATE } from '../../utils/constant'
import ListProduct from '../components/listproduct'
import style from './result.module.css'
import Link from 'next/link'

const ResultPage = ({ keyword, type }) => {
  const [filterProducts, setFilterProducts] = useState([])

  useEffect(() => {
    if (type === 'search') {
      const list = LIST_PRODUCTS.filter(item => { return item.name.toLowerCase().includes(keyword.toLowerCase()) })
      setFilterProducts(list)
    } else if (type === 'category') {
      const list = LIST_PRODUCTS.filter((item) => { return item.cateId === keyword })
      setFilterProducts(list)
    }
    return () => {}
  }, [type, keyword])

  const renderSiderBar = useMemo(() => {
    return (
        <div className={style.siderbar}>
            <div>
                <h4 className={style.title}>Danh mục sản phẩm</h4>
                <div className={style.listcate}>
                {LIST_CATE.map((item, index) => (
                  (<Link key={item.id} href={'/category/' + item.id}><a>{item.name}</a></Link>)
                ))}
                </div>
            </div>
            <div>
                <h4 className={style.title}>Địa chỉ nhận hàng</h4>
                <span className={style.address}>{'123 Cách Mạng tháng 8 P15 Quận 10, TP Hồ Chí Minh'}</span>
            </div>
            <h4 className={style.title}>Dịch vụ</h4>
        </div>
    )
  })

  const renderListProducts = () => {
    return (
        <div>
            {filterProducts.length > 0
              ? (<><h3>Tìm thấy {filterProducts.length} sản phẩm</h3></>)
              : (<><h3>Không tìm thấy sản phẩm nào</h3></>)}
            <ListProduct list={filterProducts} />
        </div>
    )
  }

  return (
            <>
                <div className={style.container}>
                    {renderSiderBar}
                    {renderListProducts()}
                </div>
            </>

  )
}

export default ResultPage
