import React from 'react'
import NavBar from '../components/header/navbar'
import Footer from '../components/footer/footer'
import AboutSection from '../components/aboutComponents/about-section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Thrila | About Me",
  description: "an introduction",
};


const Index = () => {
  return (
    <div className="flex  flex-col min-h-screen font-sans bg-custom-background  justify-between items-stretch">
      <NavBar />
      <AboutSection />
      <Footer />
    </div>
  )
}

export default Index
