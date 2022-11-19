import React, {useState, useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar'
import ToggleSwitch from './Components/ToggleSwitch';
import HomeContainer from './Components/Home/HomeContainer';
import ArtMediaContainer from './Components/ArtMedia/ArtMediaContainer';
import VictimsContainer from './Components/Victims/VictimsContainer';
import AdminPage from './Components/AdminPage';
import AdminLogin from './Components/AdminLogin';

function App() {
  let language = '/englishes'
  

  fetch(`${language}`)

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
      <Route path = '/admin' element = {<AdminLogin />} />
      <Route path = '/newentryform' element = {<AdminPage />} />
     </Routes>
    </div>
  );
}

export default App;
