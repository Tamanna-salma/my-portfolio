import React from 'react'
import About from './About'
import Banner from './Banner'
import Skill from './Skill'
import Education from './Education'
import Projectes from './Projectes'
import Experience from './Experience'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <About></About>
        <Skill></Skill>
        <Education></Education>
        <Experience></Experience>
        <Projectes></Projectes>
        <Contact></Contact>
    </div>
  )
}

export default Home