import React from 'react'
import {Link} from 'react-router-dom';
import VictimsPreviewCards from './VictimsPreviewCards'

export default function VictimPreviewContainer({firstSixData}) {
  return (
    <div className='victims-preview-container'>
        <VictimsPreviewCards firstSixData={firstSixData}/>
        <Link to="/victims" className='victims-link'><h4>Learn more about victims</h4></Link>
    </div>
  )
}
