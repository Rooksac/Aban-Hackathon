import React from 'react'
import AllVictimsCards from './AllVictimsCards'
import "./Victims.css";

export default function VictimsContainer({data}) {
  return (
    <div>
      <AllVictimsCards data={data}/>
    </div>
  )
}
