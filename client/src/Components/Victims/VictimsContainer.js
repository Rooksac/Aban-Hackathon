import React from 'react'
import AllVictimsCards from './AllVictimsCards'

export default function VictimsContainer({data}) {
  return (
    <div>
      <AllVictimsCards data={data}/>
    </div>
  )
}
