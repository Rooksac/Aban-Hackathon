import React, {useState} from 'react'
import Artwork from './Artwork'
import Letters from './Letters'
import Media from './Media'
import "./Media.css";

export default function ArtMediaContainer({english}) {
  const [footageShown, setFootageShown] = useState(false)
  const [artworkShown, setArtworkShown] = useState(false)
  const [supportShown, setSupportShown] = useState(false)


  function handleFootageClick(){
    setFootageShown(prev => !prev)
  }

  function handleArtworkClick(){
    setArtworkShown(prev => !prev)
  }

  function handleSupportClick(){
    setSupportShown(prev => !prev)
  }

  return (
    <>
    <div className='art-media-button-div'>
      <button onClick={handleFootageClick} className="media-buttons">{english ? "Media Footage" : "فیلم رسانه ای"}</button>
      <button onClick={handleArtworkClick} className="media-buttons">{english ? "Artwork" : "اثر هنری"}</button>
      <button onClick={handleSupportClick} className="media-buttons">{english ? "Support for Protesters" : "حمایت از معترضان"}</button>
    </div>
    <div className='art-media-container-div'>
      {footageShown ? <Media /> : null}
      {artworkShown ? <Artwork /> : null}
      {supportShown ? <Letters /> : null}
    </div>
    </>
  )
}
