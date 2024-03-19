import React from 'react'
import '../assets/landing.css'
import { Link } from "react-router-dom";

function landing() {
  return (
    <div className="landing-content">
        <h2 className='land-head'>Z<span className='land-head2'>en</span>V<span className='land-head2'>ista</span>&nbsp;Y<span className='land-head2'>O</span>G<span className='land-head2'>A</span>&nbsp;A<span className='land-head2'>cademy</span></h2>
        <p className='land-proverb'>"In the silence of the mind, discover the harmony of the soul."</p>
        <p className='land-para'>Join us on this sacred journey and embark on the path to  a healthier, happier you. Begin your practice today and  discover the profound  benefits of yoga—beyond the mat,  beyond the physical—where peace resides in every breath.<br/><br/>Namaste 🧘</p>
        <Link to="/login"><button className='land-button'>GET STARTED</button></Link>
    </div>
  )
}
export default landing  