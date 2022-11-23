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
  //used to determine which language to display
  const [english, setEnglish] = useState(true)

  function handleLanguageChange(){
    setEnglish(prev => !prev);
  }

  return (
    <>
    <div className="App">
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Protests_against_Ukraine_International_Airlines_Flight_752_shot_down_by_Sepah_in_Tehran_7.jpg" className='image'/>
      <div className='main-div-wrapper'>
      <div className='main-div-background'>
      <Navbar  handleLanguageChange={handleLanguageChange} english={english}/>
     <Routes>
      <Route path = '/' element = {<HomeContainer english={english} />} className='home-styling'/>
      <Route path = '/media' element = {<ArtMediaContainer english={english}/>} />
      <Route path = '/victims' element = {<VictimsContainer english = {english}/>} />
      {/* <Route path = '/admin' element = {<AdminLogin />} />
      <Route path = '/newentryform' element = {<AdminPage />} /> */}
     </Routes>
     </div>
     </div>
    </div>
    <div>

    </div>
    </>
  );
}

export default App;
