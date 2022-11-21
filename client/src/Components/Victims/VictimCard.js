import React from 'react'

export default function VictimCard({victim}) {
  return (
    <div>
            <div className='each-victim-card'>
            <div className='each-victim-preview-image'>
            <img src={victim.image_large} />
            </div>
            <h4 className='all-names'>{victim.name}</h4>
            </div>
    </div>
  )
}
