import { Suspense } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Cases from '@/components/sections/Cases'
import Contact from '@/components/sections/Contact'
import ScrollAnimator from '@/components/layout/ScrollAnimator'

export default function Home() {
  return (
    <>
      <Navbar/>
      <main id="main-content">
        <Hero/>
        <About/>
        <Services/>
        <Cases/>
        <Contact/>
      </main>
      <Footer/>
      <Suspense><ScrollAnimator/></Suspense>
    </>
  )
}