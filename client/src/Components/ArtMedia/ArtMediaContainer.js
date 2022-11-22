import React, {useState, useEffect} from 'react'
import Artwork from './Artwork'
import Support from './Support'
import Media from './Media'
import "./Media.css";

export default function ArtMediaContainer({english}) {
  const [footageShown, setFootageShown] = useState(true)
  const [artworkShown, setArtworkShown] = useState(false)
  const [supportShown, setSupportShown] = useState(false)
  const [mediaData, setMediaData] = useState([])
  const [artData, setArtData] = useState([])
  const [supportData, setSupportData] = useState([])

  let mediaType = "/media";

  if(artworkShown){
    mediaType = "/artworks"
  } else if (supportShown){
    mediaType = "/supportfor_protestors"
  } else {
    mediaType = "/media";
  }

  function handleFootageClick(){
    setFootageShown(prev => !prev)
    setArtworkShown(false)
    setSupportShown(false)
  }

  function handleArtworkClick(){
    setArtworkShown(prev => !prev)
    setFootageShown(false)
    setSupportShown(false)
  }

  function handleSupportClick(){
    setSupportShown(prev => !prev)
    setFootageShown(false)
    setArtworkShown(false)
  }

  useEffect(() => {
    fetch(`${mediaType}`)
      .then((res) => res.json())
      .then((data) => {
        if(`${mediaType}` === "/supportfor_protestors"){
          setSupportData(data)
        } else if(`${mediaType}` === "/artworks") {
          setArtData(data)
        } else {
          setMediaData(data)
        }
      });
  }, [mediaType]);

 
  return (
    <>
    <div className='art-media-button-div'>
      <button onClick={handleFootageClick} className="media-buttons">{english ? "Media Footage" : "فیلم رسانه ای"}</button>
      <button onClick={handleArtworkClick} className="media-buttons">{english ? "Artwork" : "اثر هنری"}</button>
      <button onClick={handleSupportClick} className="media-buttons">{english ? "Supporting Protestors" : "حمایت از معترضان"}</button>
    </div>
    <div className='art-media-container-div'>
      {footageShown ? mediaData.map((med) => (<Media key={med.id} med={med}/>)) : null} 
      {artworkShown ? artData.map((art) => (<Artwork key={art.id} art={art}/>)): null}
      {supportShown ? supportData.map((support) => (<Support key={support.id} support={support}/>)): null}
    </div>
    </>
  )
}
