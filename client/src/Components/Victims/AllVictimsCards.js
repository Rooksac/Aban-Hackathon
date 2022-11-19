import React from 'react'

export default function AllVictimsCards({data}) {
  return (
    <div>
        {data.map((el, i) => 
            <div key={i} className='each-preview-card'>
            <img src={el.image_large} className='each-victim-preview-image'/>
            <h4 className='victim-name-preview'>{el.name}</h4>
            </div>
        )}
    </div>
  )
}
