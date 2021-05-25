
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import HeaderBar from '../components/headercpn'
import { LIST_PRODUCTS } from '../../utils/constant'
import ListProduct from '../components/listproduct'

const SearchPage = () => {
  const router = useRouter()
  const { s } = router.query
  const [filterProducts, setFilterProducts] = useState([])

  useEffect(() => {
    const list = LIST_PRODUCTS.filter(item => { return item.name.toLowerCase().includes(s.toLowerCase()) })
    setFilterProducts(list)
    return () => {}
  }, [s])

  return (
            <>
                <div>
                    <HeaderBar keyword={s} />
                </div>
                <div style={{
                  padding: '0 5rem',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                    {filterProducts.length > 0
                      ? (<><h3>Tìm thấy {filterProducts.length} sản phẩm với từ khoá {s}</h3></>)
                      : (<><h3>Không tìm thấy kết quả với từ khoá {s}</h3></>)}
                    <ListProduct list={filterProducts} />
                </div>
            </>

  )
}

export default SearchPage
