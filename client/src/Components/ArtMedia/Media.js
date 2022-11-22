import React from 'react'

export default function Media({med}) {

  return (
    <div style={{color: 'white'}}>
      <a href={med.media} style={{color: 'white'}} target="_blank">Media</a>
    </div>
  )
}
