import React from 'react'

export default function Support({support, english}) {
  return (
    <div className='media-tiles'>
      <a href={support.support} target="_blank" className='anchor-tag-styling'>{english ? "Support Iranian protestors!" : "از معترضان ایرانی حمایت کنید"}</a>
    </div>
  )
}
