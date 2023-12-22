import React from 'react'
import Card from '../components/projectSection/projectCard'
import NavBar from '../components/header/navbar'
import Footer from '../components/footer/footer'
import { Metadata } from 'next'
import ProjectItems from './projects'

export const metadata: Metadata = {
  title: "Thrila | Projects",
  description: "Portfolio and Projects",
};

const Projects = () => {
  return (
    <div className="flex flex-col min-h-screen  font-sans bg-custom-background  justify-between items-stretch">
      <NavBar />
      {ProjectItems.map((item) => {
        return (<Card key={item.name} name={item.name} description={item.description} website={item.website} technologies={item.technologies} />)
      })}
      <Footer />
    </div>
  )
}

export default Projects
