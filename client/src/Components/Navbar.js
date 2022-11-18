import React from 'react'
import {Link} from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
        <Link to="/home"><h4>Home</h4></Link>
        <Link to="/media"><h4>Media</h4></Link>
        <Link to="/victims"><h4>Victims</h4></Link>
    </div>
  )
}
