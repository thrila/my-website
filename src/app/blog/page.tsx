import React from 'react'
import NavBar from '../components/header/navbar'
import Footer from '../components/footer/footer'
import { Metadata } from 'next';
import BlogHero from '../components/BlogSection/BlogHero';
import BlogList from '../components/BlogSection/BlogList';


export const metadata: Metadata = {
  title: "[Thrila@Wired ~/blog]$",
  description: "records of my thoughts and ideas",
};

const index = () => {
  return (
    <main className="flex flex-col  font-sans bg-custom-background  justify-center items-stretch">
      <NavBar />
      <BlogHero />
      <BlogList />
      <Footer />
    </main>
  )
}

export default index      
