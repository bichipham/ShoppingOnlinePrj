import React, { useCallback, useState } from 'react'
import styles from './header.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

// eslint-disable-next-line react/prop-types
export default function HeaderBar ({ keyword }) {
  const router = useRouter()
  const [textInput, setTextInput] = useState(keyword)
  const onSearch = useCallback(
    (e) => {
      e.preventDefault()
      router.push('/search?s=' + textInput)
    },
    [textInput]
  )

  return (
        <div className={styles.container}>
          <Link href="/">
            <a><img src={'/ic_home.png'} width={30} height={30}/></a>
          </Link>
          <form onSubmit={onSearch} style={{ paddingLeft: '20px', paddingRight: '20px' }}>
             <input
                type="text"
                id="header-search"
                placeholder="Tìm kiếm sản phẩm, danh mục"
                className={styles.searchbar}
                onInput={(e) => { setTextInput(e.target.value) }}
                value={textInput}
            />
            <button className={styles.button} type='submit'>Tìm kiếm</button>
          </form>
          <Link href="/shoppingcart">
            <img src={'/shopping-cart.png'} width={30} height={30}/>
          </Link>
        </div>

  )
}
