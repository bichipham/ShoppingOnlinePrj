
import React from 'react'
import { useRouter } from 'next/router'
import HeaderBar from '../components/headercpn'
import ResultPage from '../resultpage'

export default function Category () {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <HeaderBar/>
      <ResultPage keyword={id} type={'category'}/>
    </>
  )
}
