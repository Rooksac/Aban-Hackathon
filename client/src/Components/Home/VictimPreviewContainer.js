import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import VictimsPreviewCard from './VictimsPreviewCard'

export default function VictimPreviewContainer({english}) {
  const [previewData, setPreviewData] = useState([])
  let language = '/previewenglish';

  if(english){
    language = '/previewenglish'
  } else {
    language = '/previewfarsi'
  }
  
  useEffect(() => {
    fetch(`${language}`)
  .then((res) => res.json())
  .then(data => setPreviewData(data))}, [english])
  console.log(previewData)
  return (
    <div className='victims-preview-container'>
      <div className = 'victim-preview-cards'>
        {previewData.map(victim=><VictimsPreviewCards key = {victim.id} victim = {victim}/>)}
        </div>
        <Link to="/victims" className='victims-link'><h4>{english ? "Learn more about victims" : "درباره قربانیان بیشتر بدانید"}</h4></Link>
    </div>
  )
}
