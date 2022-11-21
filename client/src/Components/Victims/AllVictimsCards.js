import React from 'react'

export default function AllVictimsCards({victim}) {
  return (
    <div>
            <div className='each-victim-card'>
            <img src={victim.image_large} className='each-victim-preview-image'/>
            <h4 className='all-names'>{victim.name}</h4>
            </div>
    </div>
  )
}
