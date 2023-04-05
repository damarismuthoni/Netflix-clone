import React, { Component } from 'react'
import Login from './Login.js'
import Nav from '../components/Nav.js'
import Banner from './Banner.js'
import Section2 from '../components/Section2.js'
import Section3 from '../components/Section3.js'
import Section4 from '../components/Section4.js'
import Row from '../components/Row.js'
import requests from '../Requests.js'

function Homescreen ()  {
    return (

      <div
      style={{
        backgroundColor:'black'
      }
      }
      >
        <Nav/>
        <Banner/>
        <Row title="Netflix Originals" 
          fetchUrl={requests.fetchNetflixOriginals} 
          isLargeRow/>
        <Row title="Trending Now" 
          fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated"
          fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies"
          fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies"
          fetchUrl={requests.fetchComedyMovies} />
        <Login/>
        <Section2/>
        <Section3/>
        <Section4/>
        
      </div>
    )
  }

export default Homescreen;