/* eslint-disable react/prop-types */
import React, { useState, useCallback } from 'react'

export default function QualityInput ({ initQuality, minimumQuality = 1, callback }) {
  const [quality, setQuality] = useState(initQuality)

  const onChange = type => {
    let qual = 0
    if (type === 'add') qual = quality + 1
    else if (quality === minimumQuality) qual = quality
    else qual = quality - 1
    setQuality(qual)
    if (callback && typeof callback === 'function') {
      callback({ qual: qual, type: type })
    }
  }

  return (
    <div style={{ display: 'flex' }}>
        <button style={{ border: '0px', outline: 'none' }}>
            <img src='/ic_reduction.png' onClick={() => { onChange('minus') }}/>
        </button>
        <input style={{ height: '20px', width: '30px' }} type='text' value={quality} disabled />
        <button style={{ border: '0px', outline: 'none' }}>
            <img src='/ic_increase.png' onClick={() => { onChange('add') }}/>
        </button>
    </div>
  )
}
