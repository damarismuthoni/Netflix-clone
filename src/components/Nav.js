import React, { useEffect, useState} from 'react';
import './Homescreen.css';
import image4 from '../assets/images/Logonetflix.jpg'
import image5 from '../assets/images/avatar.jpg'
function Nav() {
  return (
    <div className='nav'
     style={{ display: 'flex',
      backgroundColor: 'black',
     alignItems: 'flex-start', 
     justifyContent: 'space-between' }}>

    <img 
      src={image4}
      className="netflix_logo"
      alt="netflixlogo"/>

    <img 
      src={image5}
      className="avatar"
      alt='profile__avatar'
      style={{ alignSelf: 'flex-start' }} />
  </div>
  )
}

export default Nav
