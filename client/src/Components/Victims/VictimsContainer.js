import React, {useState, useEffect} from 'react'
import AllVictimsCards from './AllVictimsCards'
import "./Victims.css";

export default function VictimsContainer({english}) {
  const [data, setData] = useState([])
  let language = '/englishes';

  if(english){
    language = '/englishes'
  } else {
    language = '/farsis'
  }
  
  useEffect(() => {
    fetch(`${language}`)
  .then((res) => res.json())
  .then(data => setData(data))}, [english])
  console.log(data)
  return (
    <div className='all-victims-div'>
      {data.map(victim => <AllVictimsCards  key = {victim.id} victim = {victim}/>)}
    </div>
  )
}
