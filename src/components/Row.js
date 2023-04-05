import axios, { Axios } from '../axios';
import React from 'react'
import { useState, useEffect } from 'react';
import './Homescreen.css';
import Homescreen from './Homescreen';



function Row({ title, fetchUrl, isLargeRow = false }) {
   const [movies, setMovies] = useState([]);

   const base_url = "https://image.tmdb.org/t/p/original/"
     useEffect(() => {
    async function  fetchData() { 
    const request = await axios.get(fetchUrl);
     setMovies(request.data.results);
    return request;
  }
    fetchData();
  }, [fetchUrl] );

  console.log(movies);

  return (
  <div className='row'>
      <h2> {title}</h2>
    
      <div className='row__posters'>

        {movies.map((movie) => (
          <img
          className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
          key={movie.id}
          src={`${base_url}${
            isLargeRow ? movie.poster_path : movie.backdrop_path
          } `}
            />
        ))}

      </div>

  </div>
  );
}

export default Row
