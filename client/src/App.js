import React, {useState, useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar'
import ToggleSwitch from './Components/ToggleSwitch';
import HomeContainer from './Components/Home/HomeContainer';
import ArtMediaContainer from './Components/ArtMedia/ArtMediaContainer';
import VictimsContainer from './Components/Victims/VictimsContainer';

function App() {
  

  return (
    <div className="App">
      <React.Fragment>
        <ToggleSwitch label="Language" />
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
