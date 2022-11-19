import React from 'react'
import {Link} from 'react-router-dom';
import "./NavBar.css";
import ToggleSwitch from '../Components/ToggleSwitch';
export default function Navbar({handleLanguageChange, english}) {
  return (
    <div className='navbar'>
      <h4 className='aban-title'>{english ? "Bloody Aban" : "آبان خونین"}</h4>
        <Link to="/home" className='navbar-names'><h4>{english ? "Home" : "صفحه اصلی"}</h4></Link>
        <Link to="/victims" className='navbar-names'><h4>{english ? "Victims" : "قربانیان"}</h4></Link>
        <Link to="/media" className='navbar-names'><h4>{english ? "Media" : "رسانه ها"}</h4></Link>
        <React.Fragment>
        <ToggleSwitch label="Language" handleLanguageChange={handleLanguageChange}/>
      </React.Fragment>
    </div>

  )
}
