import Footer from "@/app/components/footer/footer"
import NavBar from "@/app/components/header/navbar"
import NotFoundHero from "@/app/components/notFound/notFoundHero"

export default function NotFound() {
  return (
    <main className="flex flex-col  min-h-screen font-sans bg-custom-background  justify-between items-stretch">
      <NavBar />
      <NotFoundHero />
      <Footer />
    </main>
  )
}
