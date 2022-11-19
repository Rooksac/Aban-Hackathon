import React from 'react'

export default function VictimsPreviewCards({firstSixData}) {
  return (
    <div className='victim-preview-cards'>
        {firstSixData.map((victim, i) => 
            <div key={i} className='each-preview-card'>
            <img src={victim.image_large} className='each-victim-preview-image'/>
            <h4 className='victim-name-preview'>{victim.name}</h4>
            </div>
        )}
    </div>
  )
}
