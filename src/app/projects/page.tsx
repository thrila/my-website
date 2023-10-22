import React from 'react'
import Card from '../components/aboutComponents/projectSection/projectCard'
import NavBar from '../components/header/navbar'
import Footer from '../components/footer/footer'


const Projects = () => {
  return (
    <div className="flex flex-col min-h-screen  font-sans bg-custom-background  justify-between items-stretch">
      <NavBar />
      <Card />
      <Footer />
    </div>
  )
}

export default Projects
