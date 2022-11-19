import React, {useState, useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar'
import HomeContainer from './Components/Home/HomeContainer';
import ArtMediaContainer from './Components/ArtMedia/ArtMediaContainer';
import VictimsContainer from './Components/Victims/VictimsContainer';
import AdminPage from './Components/AdminPage';
import AdminLogin from './Components/AdminLogin';

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
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Protests_against_Ukraine_International_Airlines_Flight_752_shot_down_by_Sepah_in_Tehran_7.jpg" className='image'/>
      {/* <React.Fragment>
        <ToggleSwitch label="Language" handleLanguageChange={handleLanguageChange}/>
      </React.Fragment> */}
      <div className='main-div-background'>
      <Navbar  handleLanguageChange={handleLanguageChange} english={english}/>
     <Routes>
      <Route path = '/home' element = {<HomeContainer english={english}/>} className='home-styling'/>
      <Route path = '/media' element = {<ArtMediaContainer />} />
      <Route path = '/victims' element = {<VictimsContainer />} />
      <Route path = '/admin' element = {<AdminLogin />} />
      <Route path = '/newentryform' element = {<AdminPage />} />
     </Routes>
     </div>
    </div>
  );
}

export default App;
