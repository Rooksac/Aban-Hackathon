import React from 'react'

export default function VictimsPreviewCard({victim}) {
  return (
    <div>
            <div className='each-preview-card'>
            <img src={victim.image_large} className='each-victim-preview-image'/>
            <h4 className='victim-name-preview'>{victim.name}</h4>
            </div>
    </div>
  )
}
