import React, {useState, useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar'
import ToggleSwitch from './Components/ToggleSwitch';
import HomeContainer from './Components/Home/HomeContainer';
import ArtMediaContainer from './Components/ArtMedia/ArtMediaContainer';
import VictimsContainer from './Components/Victims/VictimsContainer';

function App() {
  const [english, setEnglish] = useState(true)
  const [data, setData] = useState([])
  
  function handleLanguageChange(){
    setEnglish(prev => !prev);
  }

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
    <div className="App">
      <React.Fragment>
        <ToggleSwitch label="Language" handleLanguageChange={handleLanguageChange}/>
      </React.Fragment>
      <Navbar />
     <Routes>
      <Route path = '/home' element = {<HomeContainer />} />
      <Route path = '/media' element = {<ArtMediaContainer />} />
      <Route path = '/victims' element = {<VictimsContainer />} />
     </Routes>
    </div>
  );
}

export default App;
