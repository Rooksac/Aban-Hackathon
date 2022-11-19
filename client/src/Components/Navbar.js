import React from 'react'
import {Link} from 'react-router-dom';
import "./NavBar.css";
import ToggleSwitch from '../Components/ToggleSwitch';
export default function Navbar({handleLanguageChange}) {
  return (
    <div className='navbar'>
      <h4 className='aban-title'>Bloody Aban</h4>
        <Link to="/home" className='navbar-names'><h4>Home</h4></Link>
        <Link to="/victims" className='navbar-names'><h4>Victims</h4></Link>
        <Link to="/media" className='navbar-names'><h4>Media</h4></Link>
        <React.Fragment>
        <ToggleSwitch label="Language" handleLanguageChange={handleLanguageChange}/>
      </React.Fragment>
    </div>
  )
}
