import React from 'react'


export default function Media({med, english}) {
 
  return (
    <div className='media-tiles'>
      <a href={med.media} target="_blank" className='anchor-tag-styling'>{english ? "Click here to read about the protests!" : "برای خواندن اعتراضات اینجا را کلیک کنید!"} </a>
    </div>
  )
}
