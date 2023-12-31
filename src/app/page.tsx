import NavBar from "./components/header/navbar";
import { Hero } from "./components/hero";
import Socials from "./components/iconSection/socials";
import { Blog } from "./components/BlogSection/blog";
import Footer from "./components/footer/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thrila | Home",
  description: "Portfolio and blog",
};

export default function Home() {
  return (
    <main className="flex flex-col  min-h-screen font-sans bg-custom-background  justify-center items-center" >
      <NavBar />
      <Hero />
      <Socials />
      <Blog />
      <Footer />
    </main>
  );
}
