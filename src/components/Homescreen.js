import React, { Component } from 'react'
import Login from './Login.js'
import Nav from '../components/Nav.js'
import Banner from './Banner.js'
import Section2 from '../components/Section2.js'
import Section3 from '../components/Section3.js'
import Section4 from '../components/Section4.js'
export default class Homescreen extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Banner/>
        <Login/>
        <Section2/>
        <Section3/>
        <Section4/>
        
      </div>
    )
  }
}
