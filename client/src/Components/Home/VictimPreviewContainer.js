import React from 'react'
import {Link} from 'react-router-dom';
import VictimsPreviewCards from './VictimsPreviewCards'

export default function VictimPreviewContainer({firstSixData, english}) {
  return (
    <div className='victims-preview-container'>
        <VictimsPreviewCards firstSixData={firstSixData}/>
        <Link to="/victims" className='victims-link'><h4>{english ? "Learn more about victims" : "درباره قربانیان بیشتر بدانید"}</h4></Link>
    </div>
  )
}
