import React from 'react'
import styles from './rate.module.css'

const RateStar = (rate) => {
  return (
    <div className="stars" data-stars="1">
        <svg height="20" width="18" className="star rating" data-rating="1">
            <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
        </svg>
        <p>
            <i className={styles.star2}></i>
            <i className={styles.star2}></i>
            <i className={styles.star2}></i>
        </p>
    </div>
  )
}

export default RateStar
