import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import VictimsPreviewCard from './VictimsPreviewCard'

export default function VictimPreviewContainer({english}) {
  const [previewData, setPreviewData] = useState([])
  let language = '/api/previewenglish';

  if(english){
    language = '/api/previewenglish'
  } else {
    language = '/api/previewfarsi'
  }
  
  useEffect(() => {
    fetch(`${language}`)
  .then((res) => res.json())
  .then(data => setPreviewData(data))}, [english])
  console.log(previewData)
  return (
    <div className='victims-preview-container'>
      <div className='victims-card-container'>
        {previewData.map(victim=><VictimsPreviewCard key = {victim.id} victim = {victim}/>)}
        </div>
        <Link to="/victims" className='victims-link'><h4>{english ? "Learn more about victims" : "درباره قربانیان بیشتر بدانید"}</h4></Link>
    </div>
  )
}
