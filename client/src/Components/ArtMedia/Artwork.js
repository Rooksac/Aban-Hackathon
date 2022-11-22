import React from 'react'

export default function Artwork({art}) {
  return (
    <div style={{color: 'white'}}>
      <a href={art.artwork} style={{color: 'white'}} target="_blank">Artwork</a>
    </div>
  )
}
