import React, {useState} from 'react'
import Artwork from './Artwork'
import Letters from './Letters'
import Media from './Media'
import "./Media.css";

export default function ArtMediaContainer() {
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
      <button onClick={handleFootageClick} className="media-buttons">Media Footage</button>
      <button onClick={handleArtworkClick} className="media-buttons">Artwork</button>
      <button onClick={handleSupportClick} className="media-buttons">Support for Protesters</button>
    </div>
    <div className='art-media-container-div'>
      {footageShown ? <Media /> : null}
      {artworkShown ? <Artwork /> : null}
      {supportShown ? <Letters /> : null}
    </div>
    </>
  )
}
