
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import HeaderBar from '../components/headercpn'
import { LIST_PRODUCTS } from '../../utils/constant'
import ResultPage from '../resultpage'

const SearchPage = () => {
  const router = useRouter()
  const { s } = router.query
  console.log('!!!!!!!!1 s =' + s)

  return (
            <>
                <div>
                    <HeaderBar keyword={s} />
                </div>
                <ResultPage keyword={s} type={'search'}/>
            </>

  )
}

export default SearchPage
