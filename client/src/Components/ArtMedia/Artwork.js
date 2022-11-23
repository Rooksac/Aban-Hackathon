import React from 'react'

export default function Artwork({art, english}) {
  return (
    <div className='media-tiles'>
      <a href={art.artwork} target="_blank" className='anchor-tag-styling'>{english ? "See Iranian protest art!" : "هنر اعتراضی ایرانی را ببینید!"}</a>
    </div>
  )
}
