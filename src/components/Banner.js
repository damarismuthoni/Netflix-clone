import React, {useEffect, useState}  from 'react';
import axios from "../axios";
import requests from '../Requests';
import './Homescreen.css'
import Button from 'react-bootstrap/Button';

import Netflixbanner from '../assets/images/Netflixbanner.jpg';

function Banner() {
    const [ movie, setMovie] = useState ([]);

    useEffect(() => { 
      async function fetchData(){
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie( 
          request.data.results[
              Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
        return request;
      }
      fetchData();
    }, []);

    console.log(movie);

    function truncate(string, n) {
      return string?.length > n ? string.substr(0,n-1) + '...' : string ;
    }

  return (
   <header className="banner"
   style={{
    backgroundSize: "cover", 
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.
    backdrop_path}")`,
    backgroundPosition: "center center",
   }} >

    <div className='banner__contents'>
        <h1 className='banner__title'> 
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        
        <div className='banner__buttons'>
        <Button variant="outline-warning" className='banner__button'>PLAY</Button>
        <Button variant="outline-light" className='banner__button'>MY LIST</Button>
        </div>
          <h1 className='banner__description'>
             {truncate ( movie?.overview , 180 )}
              </h1>
    </div>

     <div className="banner--fadeBottom" />

   </header>
  )
}

export default Banner
