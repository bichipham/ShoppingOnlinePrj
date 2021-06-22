/* eslint-disable react/prop-types */

import React, { useEffect, useState, useMemo, useRef } from 'react'

import { LIST_PRODUCTS, LIST_CATE } from '../../utils/constant'
import ListProduct from '../components/listproduct'
import style from './result.module.css'
import Link from 'next/link'

const ResultPage = ({ keyword, type }) => {
  const [filterProducts, setFilterProducts] = useState([])
  const filterService = [
    {
      key: 'freeship',
      value: false,
      icon: '/icon_fast.png',
      title: 'Giao siêu tốc'
    }, {
      key: 'cheapest',
      value: false,
      title: 'Rẻ hơn hoàn tiền'
    }]
  const [filterList, setFilterList] = useState(filterService)
  const currentList = useRef(null)

  useEffect(() => {
    if (type === 'search') {
      const list = LIST_PRODUCTS.filter(item => { return item.name.toLowerCase().includes(keyword.toLowerCase()) })
      setFilterProducts(list)
      currentList.current = list
    } else if (type === 'category') {
      const list = LIST_PRODUCTS.filter((item) => { return item.cateId === keyword })
      setFilterProducts(list)
      currentList.current = list
    }
    return () => {}
  }, [type, keyword])

  const handlefilterChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    const selectIndex = filterList.findIndex((filter, index) => { return filter.key === name })
    filterList[selectIndex].value = value
    setFilterList([...filterList])
  }

  useEffect(() => {
    let products = currentList.current
    filterList.forEach(filter => {
      const { key, value } = filter || {}
      if (value) {
        if (key === 'freeship') {
          products = products.filter(item => { return item.isFreeShip === true })
        }
        if (key === 'cheapest') {
          products = products.filter(item => { return item.isCheapest === true })
        }
      }
    })
    setFilterProducts(products)
  }, [filterList])

  const renderFilterList = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
        {filterList.map(item => {
          const { key, title, icon, value } = item || {}
          return <div key={key} style={{ alignItems: 'center', display: 'flex' }}>
                    <input
                        name={key}
                        type="checkbox"
                        checked={value}
                        onChange={(event) => handlefilterChange(event)}
                    />
                     {icon ? <img src='/icon_fast.png' style={{ height: '24px', marginRight: '4px' }}/> : null}
                    <span>{title}</span>
                </div>
        })}
      </div>
    )
  }

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
            <div>
                <h4 className={style.title}>Dịch vụ</h4>
                {renderFilterList()}
            </div>
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
