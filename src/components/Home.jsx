import React from 'react'
import About from './About'
import Banner from './Banner'
import Skill from './Skill'
import Education from './Education'
import Projectes from './Projectes'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <About></About>
        <Skill></Skill>
        <Education></Education>
        <Projectes></Projectes>
    </div>
  )
}

export default Home